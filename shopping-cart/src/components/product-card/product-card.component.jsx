import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product, productClickHandler }) => {
  const { name, imageURL, description, price } = product;

  return (
    <section className="product-card">
      <h4>{name}</h4>
      <div className="product-details">
        <img className="product-img" src={imageURL} alt={name} />

        <div className="product-desc">
          <p className="product-para">{description}</p>

          <div className="product-footer">
            <div className="big-btn">
              <span className="price">MRP Rs.{price}</span>
              <CustomButton
                onClick={() => productClickHandler(product)}
                className="big-btn-align"
              >
                Buy Now
              </CustomButton>
            </div>
            <CustomButton
              className="small-btn"
              onClick={() => productClickHandler(product)}
            >
              Buy Now @ Rs.{price}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
