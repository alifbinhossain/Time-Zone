import React from "react";
import "./Features.css";
import img1 from "../../images/logo/icon-1.png";
import img2 from "../../images/logo/icon-2.png";
import img3 from "../../images/logo/icon-3.png";
import img4 from "../../images/logo/icon-4.png";

const Features = () => {
  return (
    <ul className="features" data-aos="fade-in">
      <li className="features-list">
        <img src={img1} alt="" />
        <h5>Free Shipping On All Orders</h5>
      </li>
      <li className="features-list">
        <img src={img2} alt="" />
        <h5>Free Return And Exchange</h5>
      </li>
      <li className="features-list">
        <img src={img3} alt="" />
        <h5>100% Genuine Commitment</h5>
      </li>
      <li className="features-list">
        <img src={img4} alt="" />
        <h5>24/7 Customer Support</h5>
      </li>
    </ul>
  );
};

export default Features;
