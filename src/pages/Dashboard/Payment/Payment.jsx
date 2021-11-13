import React from "react";
import "./Payment.css";
import banner from "../../../images/others/Credit Card Payment-cuate.svg";
const Payment = () => {
  return (
    <section className="payment" data-aos="fade-in">
      <img data-aos="fade-right" src={banner} alt="" />
      <h1 data-aos="fade-up" className="ms-3">
        Payment System is coming soon...
      </h1>
    </section>
  );
};

export default Payment;
