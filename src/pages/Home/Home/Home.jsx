import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../../shared_componets/Header/Header";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../../../shared_componets/Features/Features";
import img from "../../../images/others/offer.jpg";
import Footer from "../../../shared_componets/Footer/Footer";
import { Col, Row } from "react-bootstrap";
import Watch from "../../../shared_componets/Watch/Watch";
import axios from "axios";
import Reviews from "../Reviews/Reviews";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/watches?limit=6")
        .then((data) => {
          setWatches(data.data);
          setLoading(false);
        });
    }, 800);
  }, []);

  return (
    <div className="home" data-aos="fade-in">
      <Header></Header>
      <Banner></Banner>
      <section className="our-collections">
        <h1 className="text-center">Hot Deals</h1>
        <p className="text-center mb-4">
          Discover history reborn in this unique collection inspired by OMEGA’s
          chronograph watchmaking from the 1940s.
        </p>

        {loading ? (
          <div className="spinner-box">
            <FadeLoader color="#777777" />
          </div>
        ) : (
          <Row xs={1} sm={2} md={3} className="g-4">
            {watches.map((watch) => (
              <Col key={watch._id}>
                <Watch watch={watch}></Watch>
              </Col>
            ))}
          </Row>
        )}
      </section>
      <img className="w-100 mt-lg-5 sm-none" src={img} alt="" />
      <Brands></Brands>
      <Reviews></Reviews>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
