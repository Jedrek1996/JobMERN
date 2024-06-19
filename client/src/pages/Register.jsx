import React from "react";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last Name"
          defaultValue="smith"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="text" name="email" defaultValue="john@gmail.com" />
        <FormRow type="text" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a number
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
