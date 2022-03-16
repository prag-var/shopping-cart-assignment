import React from "react";

import './category-dropdown.styles.scss';

const CategoryDropDown = ({
  categoryList,
  productId,
  defaultSelected,
  ...otherProps
}) => {
  return (
    <select
      onChange={otherProps.handleDropDownChange}
      className="category-dropdown-content"
      value={productId ? productId : "Default"}
    >
      <option value="Default">All</option>
      {categoryList.map((category) =>
        category.enabled ? (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ) : null
      )}
    </select>
  );
};

export default CategoryDropDown;
