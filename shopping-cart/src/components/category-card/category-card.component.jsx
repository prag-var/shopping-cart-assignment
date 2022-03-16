import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./category-card.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CategoryCard = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div className="category-container">
      {categoryList.map((category) => {
        const { name, description, imageUrl, key, id } = category;

        return category.enabled ? (
          <div className="category" key={key}>
            <div className="category-image">
              <img src={imageUrl} alt={name} />
            </div>
            <div className="category-details">
              <h2>{name}</h2>
              <p>{description}</p>
              <CustomButton
                onClick={() => navigate(`/products/${id}`)}
              >{`Explore ${key}`}</CustomButton>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default CategoryCard;
