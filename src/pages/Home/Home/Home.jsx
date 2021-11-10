import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../../shared_componets/Header/Header";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import img from "../../../images/others/offer.jpg";
import Footer from "../../../shared_componets/Footer/Footer";
import { Col, Row } from "react-bootstrap";
import Watch from "../../../shared_componets/Watch/Watch";
import axios from "axios";

const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/watches?limit=6")
      .then((data) => setWatches(data.data));
  }, []);

  console.log(JSON.stringify(watches));

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <section className="our-collections">
        <h1 className="text-center">Our collections</h1>
        <Row xs={1} sm={2} md={3} className="g-4">
          {watches.map((watch) => (
            <Col>
              <Watch watch={watch}></Watch>
            </Col>
          ))}
        </Row>
      </section>
      <img className="w-100" src={img} alt="" />
      <Brands></Brands>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
