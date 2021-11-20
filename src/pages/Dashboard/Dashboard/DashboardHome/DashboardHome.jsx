import React from "react";
import "./DashboardHome.css";
import img from "../../../images/others/Visual data-bro.svg";
import useAll from "../../../hooks/useAll";

const DashboardHome = () => {
  const { user } = useAll();
  return (
    <section className="dash-home" data-aos="fade-in">
      <h1 data-aos="fade-up">
        Welcome to our dashboard <br /> {user?.displayName.split(" ")[0]} !
      </h1>
      <img data-aos="fade-left" src={img} alt="" />
    </section>
  );
};

export default DashboardHome;
