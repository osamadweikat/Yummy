import React from "react";
import { Products } from "../../types/products.types";

interface ProductCardProps {
  product: typeof Products[number];
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="menu-product-container">
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
  );
};

export default ProductCard;
