import React from "react";

import "./category-sidebar.styles.scss";

const CategorySideBar = ({ categoryList, ...otherProps }) => {
  return (
    <div className="category-section">
      <ul className="category-list">
        {categoryList
          .sort((a, b) => a.order - b.order)
          .map((category) =>
            category.enabled ? (
              <li
                key={category.id}
                className={category.id === otherProps.id ? "active" : null}
                onClick={() => otherProps.handleCategoryChange(category.id)}
              >
                {category.name}
              </li>
            ) : null
          )}
      </ul>
    </div>
  );
};

export default CategorySideBar;
