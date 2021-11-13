import React from "react";
import "./Brands.css";
import { Col, Row } from "react-bootstrap";
import Brand from "../Brand/Brand";
import img1 from "../../../images/brands/brand-1.jpg";
import img2 from "../../../images/brands/brand-2.jpg";
import img3 from "../../../images/brands/brand-3.jpg";
import img4 from "../../../images/brands/brand-4.jpg";
import img5 from "../../../images/brands/brand-5.jpg";
import img6 from "../../../images/brands/brand-6.jpg";
import img7 from "../../../images/brands/brand-7.jpg";
import img8 from "../../../images/brands/brand-8.jpg";
import img9 from "../../../images/brands/brand-9.jpg";
import img10 from "../../../images/brands/brand-10.jpg";

const Brands = () => {
  const brands = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
  ];

  return (
    <section className="brands" data-aos="fade-up">
      <h1 className="text-center">Shop By Brands</h1>
      <p className="text-center">
        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
        INDUSTRY
      </p>
      <Row xs={1} sm={2} md={4} lg={5} className="g-3 mt-3">
        {brands.map((brand) => (
          <Col key={brand.id}>
            <Brand brand={brand}></Brand>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Brands;
