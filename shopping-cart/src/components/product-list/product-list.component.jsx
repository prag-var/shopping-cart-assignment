import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../providers/cart/cart.provider";
import axios from "axios";

import "./product-list.styles.scss";
import CategorySideBar from "../category-sidebar/category-sidebar.component";
import ProductCard from "../product-card/product-card.component";
import CategoryDropDown from "../category-dropdown/category-dropdown.component";

const ProductList = ({ productData }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [defaultSelected, setDefaultSelected] = useState(true);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  let { productId } = useParams();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        axios
          .get("http://localhost:5000/categories")
          .then((response) => setCategoryList(response.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCategoryData();
  }, []);

  const handleCategoryChange = (id) => {
    if (productId === id || id === "Default") {
      navigate("/products");
      setDefaultSelected(true);
    } else {
      navigate(`/products/${id}`);
    }
  };

  const handleDropDownChange = (event) => {
    const id = event.target.value;
    if (productId === id || id === "Default") {
      navigate("/products");
      setDefaultSelected(true);
    } else {
      navigate(`/products/${id}`);
    }
  };

  const productClickHandler = async (product) => {
    const headers = {
      "Content-Type": "text/plain",
    };
    const data = await axios({
      url: `http://localhost:5000/addToCart`,
      method: "post",
      data: {
        id: product.id,
      },
      headers: headers,
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err));
    if (data.response === "Success") {
        //alert(data.response);
        addItem(product);
    }
  };

  return (
    <div className="product-list">
      <CategorySideBar
        categoryList={categoryList}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="category-dropdown">
        <CategoryDropDown
          categoryList={categoryList}
          productId={productId}
          defaultSelected={defaultSelected}
          handleDropDownChange={handleDropDownChange}
        />
      </div>
      <div className="category-description">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} productClickHandler={productClickHandler}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
