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
  return (
    <div className="home">
      <Header />
      <About />
      <Facts />
      <Gallery />
      <Menu />
      <Partner />
      <Testimonials />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
