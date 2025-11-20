import About from "../../components/about/About.";
import Facts from "../../components/facts/Facts";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Facts />
      <Gallery />
    </div>
  );
};

export default Home;
