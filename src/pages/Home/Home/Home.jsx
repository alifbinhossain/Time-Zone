import React from "react";
import Header from "../../../shared_componets/Header/Header";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import img from "../../../images/others/offer.jpg";
import Footer from "../../../shared_componets/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Brands></Brands>
      {/* <img className="w-100" src={img} alt="" /> */}
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
