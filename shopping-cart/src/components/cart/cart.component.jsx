import React, { useContext } from "react";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";
import CartItem from "../cart-item/cart-item.component";

import "./cart.styles.scss";

const Cart = () => {
  const { cartItems, toggleHidden, cartItemsCount, cartTotal } =
    useContext(CartContext);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          {cartItemsCount ? (
            <h3>My Cart ({cartItemsCount} item)</h3>
          ) : (
            <h4>My Cart</h4>
          )}
          <span onClick={toggleHidden} className="close">
            &times;
          </span>
        </div>

        <div className="cart-container">
          {cartItems.length ? (
            <>
              {cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} key={cartItem.id}></CartItem>
              ))}
              <section className="price-logo">
                <img src="/static/images/lowest-price.png" alt="lowest-price" />
                <p>You won't find it cheaper anywhere</p>
              </section>
            </>
          ) : (
            <div className="cart-empty">
              <h2>No items in your cart</h2>
              <p>Your favorite items are just a click away</p>
            </div>
          )}
        </div>

        <footer className="cart-footer">
          {cartItems.length ? (
            <>
              <span className="footer-content">
                Promo card can be apply on the payment page
              </span>
              <CustomButton
                onClick={toggleHidden}
                className="custom-button checkout-btn"
                checkout
              >
                <div>Proceed to Checkout</div>
                <div>Rs. {cartTotal} &nbsp;&gt;</div>
              </CustomButton>
            </>
          ) : (
            <CustomButton onClick={toggleHidden} className="custom-button">
              <div>Start Shopping</div>
            </CustomButton>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Cart;
