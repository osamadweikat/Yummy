import { ScrollContext } from "../../context/ScrollContext";
import { useRef } from "react";
import About from "../../components/about/About.";
import Contact from "../../components/contact/Contact";
import Event from "../../components/events/Event";
import Facts from "../../components/facts/Facts";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Partner from "../../components/partner/Partner";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const scrollTo = (index: number) => {
    const element = sectionRefs.current[index];
    if (!element) return;

    const navbarHeight = 80;
    const target =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    const duration = 1000;
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const progress = Math.min(time / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (time < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <div className="home">
        <div
          ref={(el) => {
            sectionRefs.current[0] = el!;
          }}
        >
          <Header />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[1] = el!;
          }}
        >
          <About />
        </div>
        <Facts />
        <div
          ref={(el) => {
            sectionRefs.current[2] = el!;
          }}
        >
          <Gallery />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[3] = el!;
          }}
        >
          <Menu />
        </div>
        <Partner />
        <Testimonials />
        <div
          ref={(el) => {
            sectionRefs.current[4] = el!;
          }}
        >
          <Event />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[5] = el!;
          }}
        >
          <Contact />
        </div>
        <Footer />
      </div>
    </ScrollContext.Provider>
  );
};

export default Home;
