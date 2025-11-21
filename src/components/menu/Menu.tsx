import "./menu.css";
import { Products } from "../../types/products.types";
import { useInView } from "../../hooks/useInView";

const Menu = () => {
  const { setRef, inViewIndexes } = useInView<HTMLDivElement>();

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
            <span>house </span>dishes
          </h2>
          <div className="title-divider" />
        </div>
        <div className="menu-list-collection">
          <div
            ref={setRef}
            className={`products-list fade-up ${
              inViewIndexes.includes(1) ? "in-view" : ""
            }`}
          >
            {Products.map((product) => (
              <div key={product.id} className="menu-product-container">
                <div className="menu-product-wrapper">
                  <div className="product-info-container">
                    <div className="product-info-wrapper">
                      <h3>{product.name}</h3>
                      <div className="title-divider" />
                      <p>{product.description}</p>
                      <div className="product-tags-wrapper">
                        {product.tags.map((tag) => (
                          <div key={tag} className="product-tag-wrapper">
                            <h6 className={`tag tag-${tag}`}>{tag}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <div className="price-tag">
                      <span>{product.price} usd</span>
                    </div>
                  </div>
                  <div className="product-name-container">
                    <h3 className="product-name">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={setRef}
          className={`menu-button-container fade-up ${
            inViewIndexes.includes(2) ? "in-view" : ""
          }`}
        >
          <button>book a table</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
