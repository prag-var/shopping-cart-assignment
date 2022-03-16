import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, error, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    <p className="error-message">{error} </p>
  </div>
);

export default FormInput;
