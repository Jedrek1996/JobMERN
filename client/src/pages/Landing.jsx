import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            {" "}
            job
            <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            eaque aperiam quaerat? Vero consequatur quisquam deleniti obcaecati?
            Voluptates a dignissimos, deleniti nemo hic maiores ullam porro
            voluptate, cumque exercitationem esse?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
