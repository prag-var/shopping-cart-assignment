import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss';

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { firstName, lastName, email, password, confirmPassword } =
    userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    navigate('/');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    if (event.target.name === "email") {
      const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

      if (!emailPattern.test(event.target.value)) {
        const emailError = "Please add valid email pattern wich includes @";
        setInputError({ ...inputError, [name]: emailError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }

    if (event.target.name === "password") {
      const passworPattern = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;

      if (!passworPattern.test(event.target.value)) {
        const passwordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric and no space)";
        setInputError({ ...inputError, [name]: passwordError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }

    if (event.target.name === "confirmPassword") {
      if (password !== event.target.value) {
        setInputError({ ...inputError, [name]: "Password do not match" });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }
  };

  return (
    <div className="sign-up">
      <div className="signup-content">
        <h2>Signup</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <FormInput
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
          error={inputError.email}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
          error={inputError.password}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
          error={inputError.confirmPassword}
        />
        <CustomButton
          type="submit"
          className="custom-button"
          disabled={
            inputError.email ||
            inputError.password ||
            inputError.confirmPassword
          }
        >
         Signup
        </CustomButton>
      </form>
    </div>
  );
};
export default SignUp;