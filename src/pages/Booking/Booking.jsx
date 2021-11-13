import React, { useEffect, useState } from "react";
import "./Booking.css";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import popupSuccess from "../../popup/popupSuccess";
import Rating from "react-rating";
import { useForm } from "react-hook-form";
import useAll from "../../hooks/useAll";
import { FadeLoader } from "react-spinners";

const Booking = () => {
  const { user } = useAll();
  const [watch, setWatch] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = `https://young-journey-72414.herokuapp.com/watch/${id}`;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get(url).then((data) => {
        setWatch(data.data);
        setLoading(false);
      });
    }, 800);
  }, []);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const orderInfo = {
      name: data.name || user?.name,
      email: data.email || user?.email,
      address: data.address,
      date: data.date,
      status: "pending",
      watch: watch,
    };

    axios
      .post(
        "https://young-journey-72414.herokuapp.com/product/booking",
        orderInfo
      )
      .then((data) => {
        const isPlaced = data.data.insertedId;
        if (isPlaced) {
          popupSuccess("booked");
          reset();
        }
      });
  }; //post a booking request & received response

  return (
    <section className="booking" data-aos="fade-in">
      <div className="booking-banner">
        <h3>
          <Link to="/home">Home</Link> &gt; <Link to="/explore">Explore</Link>{" "}
          &gt; Booking &gt; {watch?.name}
        </h3>
      </div>

      {loading ? (
        <div className="spinner-box">
          <FadeLoader color="#777777" />
        </div>
      ) : (
        <main className="booking-content">
          {/* -------------------------------------------------------------------------- */
          /*                               BOOKING PRODUCT                              */
          /* -------------------------------------------------------------------------- */}
          <div className="booking-product" data-aos="fade-in">
            <div className="product-image-box">
              <img src={watch?.img1} alt="" />
              <img className="image-hover" src={watch?.img2} alt="" />
            </div>

            <div className="product-details">
              <h2 className="product-name">{watch?.name}</h2>

              <p className="description">{watch?.description}</p>

              <h4 className="product-price">
                Price : €
                {(
                  watch?.price -
                  watch?.price * (watch?.discount / 100)
                ).toFixed(2)}
              </h4>
              <div className="d-flex align-items-center">
                <p className="me-4 total-reviews">
                  <i class="fas fa-users"></i> Total Reviews : {watch?.reviews}
                </p>
                <p className="ratings">
                  <Rating
                    className="icon"
                    initialRating={watch?.rating}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  />
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      <div
        className="booking-bottom"
        data-aos="fade-right"
        data-aos-offset="250"
      >
        <h1 className="discount">
          Big Sale <br /> {watch?.discount}% off!
        </h1>
        {/* -------------------------------------------------------------------------- */
        /*                                BOOKING FORM                                */
        /* -------------------------------------------------------------------------- */}
        <div className="booking-form">
          <h3>Order Now!</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="name"
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <small>Name is required</small>
            )}

            <input
              placeholder="email"
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            {errors.email && <small>Email is required</small>}
            <input
              placeholder="address"
              {...register("address", { required: true })}
            />
            {errors.address && <small>Address is required</small>}
            <input
              type="date"
              placeholder="date"
              {...register("date", { required: true })}
            />
            {errors.date && <small>Date is required</small>}

            <input className="btn-book mt-3" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
