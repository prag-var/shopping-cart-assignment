import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";

import { CartContext } from "./providers/cart/cart.provider";

import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import LoginPage from './pages/loginpage/loginpage.component';
import RegisterPage from './pages/registerpage/registerpage.component';
import HomePage from "./pages/homepage/homepage.component";
import Cart from './components/cart/cart.component';
import ProductListPage from "./pages/productListPage/productListPage.component";

function App() {
  const { hidden } = useContext(CartContext);
  return (
    <div>
      <Header/>
      {hidden ? null : <Cart />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/*" element={<ProductListPage />} />
        <Route exact path="/signin" element={<LoginPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
