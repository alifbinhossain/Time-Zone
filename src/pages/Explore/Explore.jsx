import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Features from "../../shared_componets/Features/Features";
import Footer from "../../shared_componets/Footer/Footer";
import Header from "../../shared_componets/Header/Header";
import Watch from "../../shared_componets/Watch/Watch";

const Explore = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/watches")
      .then((data) => setWatches(data.data));
  }, []);

  return (
    <div>
      <Header></Header>

      <section className="our-collections">
        <h1 className="text-center mb-3">Our Collections</h1>
        <p className="text-center mb-4">
          LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
          INDUSTRY
        </p>
        <Row xs={1} sm={2} md={3} className="g-4">
          {watches.map((watch) => (
            <Col key={watch._id}>
              <Watch watch={watch}></Watch>
            </Col>
          ))}
        </Row>
      </section>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
