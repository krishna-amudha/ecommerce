import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" py-5" style={{ background: "#FCEED5"}}>
      <div className="container mb-4 pt-5">
  <div className="newsletter-box d-flex flex-column flex-md-row justify-content-between align-items-center">
    
    <h5 className="text-white mb-3 mb-md-0 fw-semibold">
      Register Now So You Don’t Miss<br></br> Our Programs
    </h5>

    <div className="newsletter-input d-flex">
      <input
        type="email"
        className="form-control border-0"
        placeholder="Enter your Email"
      />
      <button className="btn btn-subscribe ms-2">
        Subscribe Now
      </button>
    </div>

  </div>
</div>

      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center border-top py-3">
        <ul className="nav mb-2 mb-md-0">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-dark">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-dark">Category</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-dark">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-dark">Contact</a>
          </li>
        </ul>

        <div>
          <i className="bi bi-facebook mx-3"></i>
          <i className="bi bi-twitter mx-3"></i>
          <i className="bi bi-instagram mx-3"></i>
          <i className="bi bi-youtube mx-3"></i>
        </div>
      </div>

   <div className="container pt-4">
  <div className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start position-relative">

    <p className="mb-2 mb-md-0 small text-muted">
      © 2022 Monito. All rights reserved.
    </p>

    <h5 className="text-center">
      <img src={Logo} alt="logo" style={{ height: "45px" }} />
    </h5>

    <div className="small">
      <a href="#" className="text-muted me-3">Terms of Service</a>
      <a href="#" className="text-muted">Privacy Policy</a>
    </div>

  </div>
</div>
    </footer>
  );
};

export default Footer;