import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((data) => setReviews(data.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="reviews">
      <p className="text-center m-0"> Testimonial</p>
      <h1 className="text-center mb-4">Our Happy Clients</h1>
      <Slider {...settings} className="slider">
        {reviews.length &&
          reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
      </Slider>
    </section>
  );
};

export default Reviews;
