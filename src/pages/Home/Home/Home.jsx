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
import { MoonLoader, FadeLoader } from "react-spinners";

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get("http://localhost:5000/watches?limit=6").then((data) => {
        setWatches(data.data);
        setLoading(false);
      });
    }, 1500);
  }, []);

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <section className="our-collections">
        <h1 className="text-center">Hot Deals</h1>
        <p className="text-center mb-4">
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
          INDUSTRY
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
      <img className="w-100 mt-5" src={img} alt="" />
      <Brands></Brands>
      <Reviews></Reviews>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
