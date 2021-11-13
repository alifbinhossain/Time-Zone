import axios from "axios";
import "./Explore.css";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Features from "../../shared_componets/Features/Features";
import Footer from "../../shared_componets/Footer/Footer";
import Header from "../../shared_componets/Header/Header";
import Watch from "../../shared_componets/Watch/Watch";
import { FadeLoader } from "react-spinners";

const Explore = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/watches")
        .then((data) => {
          setWatches(data.data);
          setLoading(false);
        });
    }, 800);
  }, []);

  return (
    <section className="explore" data-aos="fade-in">
      <Header></Header>
      <section className="our-collections">
        <h1 className="text-center mb-3">Our Collections</h1>
        <p className="text-center mb-4">
          Time Zone's love of aviation and deep understanding of its <br />
          uncompromising demands are inherent throughout the Altitude
          Collections.
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
      <Features></Features>
      <Footer></Footer>
    </section>
  );
};

export default Explore;
