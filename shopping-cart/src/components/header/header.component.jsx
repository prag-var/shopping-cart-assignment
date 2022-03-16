import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {

  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img src="static/images/logo.png" alt="logo" className="logo-container"/>
        </Link>
        <div className="options">
          <Link className="option-1" to="/">
            Home
          </Link>
          <Link className="option-1" to="/products">
            Products
          </Link>
        </div>
        <div className="login-cart-section">
          <div className="login-section">
            <Link to="/signin" className='option-2'>
              Signin
            </Link>
            <Link to="/signup" className='option-2'>
              Register
            </Link>
          </div>
          <div className="cart-section" onClick={toggleHidden}>
            <span className='cart-icon'><img src="static/images/cart.svg" alt="cart-icon" /></span>
            <span className="item-count">{`${cartItemsCount} item`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
