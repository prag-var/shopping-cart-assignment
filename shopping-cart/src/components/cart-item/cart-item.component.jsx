import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <section className="cart-item">
      <div className="product-image">
        <img src={imageURL} alt={imageURL} />
      </div>
      <div className="product-description">
        <div className="name">{name}</div>
        <div className="product-overview">
          <div className="quantity-conatiner">
            <button
              className="product-quantity"
              onClick={() => addItem(cartItem)}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="product-quantity"
              onClick={() => removeItem(cartItem)}
            >
              -
            </button>
            <span>X Rs. {price}</span>
          </div>

          <div>Rs. {price * quantity}</div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
