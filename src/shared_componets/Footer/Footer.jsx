import React from "react";
import "./Footer.css";
import logo from "../../images/logo/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />

      <ul className="footer-list">
        <li className="footer-item">
          <a href="/"> About Us</a>
        </li>
        <li className="footer-item">
          <a href="/">Contact Us</a>
        </li>
        <li className="footer-item">
          <a href="/"> Information</a>
        </li>
        <li className="footer-item">
          <a href="/"> Extras</a>
        </li>
        <li className="footer-item">
          <a href="/">Latest Post</a>
        </li>
        <li className="footer-item">
          <a href="/">Privacy & Policy</a>
        </li>
      </ul>

      <ul className="footer-social-list">
        <a href="/" className="footer-social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="footer-social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="footer-social-link">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="/" className="footer-social-link">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="/" className="footer-social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="footer-social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </ul>

      <hr />

      <p className="text-center">
        <small>
          Time © 2021 Watch Store. All Rights Reserved by Alif Bin Hossain
        </small>
      </p>
    </footer>
  );
};

export default Footer;
