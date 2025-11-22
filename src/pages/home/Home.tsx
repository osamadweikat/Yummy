import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../context/ScrollContext";
import { ProdutCategory } from "../../types/products.types";
import { HeaderConfig } from "../../types/header.types";
import Header from "../../components/header/Header";
import About from "../../components/about/About.";
import Facts from "../../components/facts/Facts";
import Gallery from "../../components/gallery/Gallery";
import Menu from "../../components/menu/Menu";
import Partner from "../../components/partner/Partner";
import Testimonials from "../../components/testimonials/Testimonials";
import Event from "../../components/events/Event";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const SCROLL_DURATION = 1000;
const NAVBAR_HEIGHT = 80;

const Home = () => {
  const homeHeader = HeaderConfig["home"];
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollIndex, setScrollIndex] = useState<number | null>(null);

  const scrollTo = (index: number) => {
    const element = sectionRefs.current[index];
    if (!element) return;

    const target =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const progress = Math.min(time / SCROLL_DURATION, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (time < SCROLL_DURATION) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const state = (location.state as { scrollToIndex?: number }) || {};
    if (state.scrollToIndex !== undefined) {
      setScrollIndex(state.scrollToIndex);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    if (scrollIndex !== null && sectionRefs.current[scrollIndex]) {
      scrollTo(scrollIndex);
      setScrollIndex(null);
    }
  }, [scrollIndex]);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) sectionRefs.current[index] = el;
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <div className="home">
        <div ref={setSectionRef(0)} className="scroll-section">
          <Header title={homeHeader.title} image={homeHeader.image} />
        </div>

        <div ref={setSectionRef(1)} className="scroll-section">
          <About />
        </div>

        <Facts />

        <div ref={setSectionRef(2)} className="scroll-section">
          <Gallery />
        </div>

        <div ref={setSectionRef(3)} className="scroll-section">
          <Menu category={ProdutCategory.Home} />
        </div>

        <Partner />
        <Testimonials />

        <div ref={setSectionRef(4)} className="scroll-section">
          <Event />
        </div>

        <div ref={setSectionRef(5)} className="scroll-section">
          <Contact />
        </div>

        <Footer />
      </div>
    </ScrollContext.Provider>
  );
};

export default Home;
