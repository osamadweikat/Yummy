import About from "../../components/about/About.";
import Facts from "../../components/facts/Facts";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Facts />
    </div>
  );
};

export default Home;
