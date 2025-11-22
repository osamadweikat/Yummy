import "./menu.css";
import { Products, ProdutCategory } from "../../types/products.types";
import { useInView } from "../../hooks/useInView";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

interface MenuProps {
  category?: ProdutCategory | "all";
}

const Menu: React.FC<MenuProps> = ({ category }) => {
  const { setRef, inViewIndexes } = useInView<HTMLDivElement>();
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const navigate = useNavigate();

  const handleBookTable = () => {
    navigate("/", { state: { scrollToIndex: 1 } });
  };

  useEffect(() => {
    if (!category || category === "all") {
      setFilteredProducts(Products);
    } else {
      setFilteredProducts(
        Products.filter((p) => p.category.includes(category as ProdutCategory))
      );
    }
  }, [category]);

  return (
    <section className="menu-section">
      <div className="menu-container">
        <div
          ref={setRef}
          className={`menu-title-container fade-up ${
            inViewIndexes.includes(0) ? "in-view" : ""
          }`}
        >
          <h2>
            <span>{category === "home" ? "house" : category} </span>dishes
          </h2>
          <div className="title-divider" />
        </div>
        <div className="menu-list-collection">
          <div ref={setRef} className="products-list">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div
          ref={setRef}
          className={`menu-button-container fade-up ${
            inViewIndexes.includes(2) ? "in-view" : ""
          }`}
        >
          <button onClick={handleBookTable}>Book a Table</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
