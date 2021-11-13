import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "../Review/Review";
import { FadeLoader } from "react-spinners";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/reviews")
        .then((data) => {
          setReviews(data.data);
          setLoading(false);
        });
    }, 800);
  }, []);

  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="reviews" data-aos="fade-left" data-aos-offset="200">
      <p className="text-center m-0"> Testimonial</p>
      <h1 className="text-center mb-4">Our Happy Customers</h1>

      {loading ? (
        <div className="spinner-box">
          <FadeLoader color="#777777" />
        </div>
      ) : (
        <Slider {...settings} className="slider">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Reviews;
