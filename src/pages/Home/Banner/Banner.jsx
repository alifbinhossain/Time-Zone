import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner_1 from "../../../images/banners/banner-1.jpg";
import banner_2 from "../../../images/banners/banner-2.jpg";
import banner_3 from "../../../images/banners/banner-3.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
