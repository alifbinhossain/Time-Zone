import React from "react";
import Header from "../../shared_componets/Header/Header";
import banner from "../../images/others/form-banner-2.jpg";

import "./Form.css";

const Form = ({ children }) => {
  return (
    <section className="form" data-aos="fade-in">
      <Header></Header>

      <div className="form-box">{children}</div>
    </section>
  );
};

export default Form;
<h1>This is login form</h1>;
