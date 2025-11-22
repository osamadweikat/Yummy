import { FC } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import NotFound from "../../pages/not-found/NotFound";
import { ProdutCategory, Products } from "../../types/products.types";
import { ScrollContext } from "../../context/ScrollContext";
import { HeaderConfig } from "../../types/header.types";

const NAVBAR_HEIGHT = 80;

const MenuPage: FC = () => {
  const { category: paramCategory } = useParams<{ category: string }>();

  const category: ProdutCategory | "all" =
    paramCategory?.trim().toLowerCase() === "all"
      ? "all"
      : (paramCategory?.trim().toLowerCase() as ProdutCategory);

  const validCategories: string[] = Array.from(
    new Set(Products.flatMap((p) => p.category))
  );

  if (!validCategories.includes(category) && category !== "all") {
    return <NotFound />;
  }

  const scrollTo = (index: number) => {
    const elements =
      document.querySelectorAll<HTMLDivElement>(".scroll-section");
    const element = elements[index];
    if (!element) return;

    const target =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const headerData = HeaderConfig[category || "all"] || HeaderConfig["all"];

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <div className="menu-page">
        <div className="scroll-section">
          <Header title={headerData.title} image={headerData.image} />
        </div>
        <div className="scroll-section">
          <Menu category={category ?? ProdutCategory.Home} />
        </div>
        <div className="scroll-section">
          <Footer />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default MenuPage;
