import React from "react";
import "./DashReview.css";
import { useForm } from "react-hook-form";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from "axios";
import popupSuccess from "../../../popup/popupSuccess";

const DashReview = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm(); //import from react hook form

  const onSubmit = (data) => {
    const review = {
      name: data.name,
      text: data.text,
      address: data.address,
      rating: Number(data.rating),
    }; //customer review information

    axios
      .post("https://young-journey-72414.herokuapp.com/reviews", review)
      .then((data) => {
        const isAdded = data.data.insertedId;
        if (isAdded) {
          popupSuccess("add review");
          reset();
        }
      }); //adding user review's to DB & received confirmation response

    console.log(review);
  };

  return (
    <section className="dash-review" data-aos="fade-in">
      <h1 data-aos="fade-up">Add a New Review</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3 gy-2" xs={1} lg={3}>
          {/* -------------------------------------------------------------------------- */
          /*                                 NAME FIELD                                  */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridName">
            <FloatingLabel controlId="floatingInput" label="Your Name">
              <Form.Control
                type="name"
                placeholder="title"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>Name is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                                ADDRESS FIELD                               */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Your Address">
              <Form.Control
                type="name"
                placeholder="url"
                {...register("address", { required: true })}
              />
            </FloatingLabel>
            {errors.address?.type === "required" && (
              <small>Address is required.</small>
            )}
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                                RATINGS FIELD                               */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Ratings">
              <Form.Select
                defaultValue="Choose..."
                {...register("rating", { required: true })}
              >
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Select>
              {errors.rating?.type === "required" && (
                <small>Ratings is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>
        </Row>

        {/* -------------------------------------------------------------------------- */
        /*                                 TEXT FIELD                                 */
        /* -------------------------------------------------------------------------- */}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel
            controlId="floatingInput"
            label=" Your valuable feedback"
          >
            <Form.Control
              as="textarea"
              style={{ height: "250px" }}
              {...register("text", { required: true })}
            />
            {errors.text?.type === "required" && (
              <small>Your feedback is required.</small>
            )}
          </FloatingLabel>
        </Form.Group>

        <button className="btn-add" type="submit">
          Add Review
        </button>
      </Form>
    </section>
  );
};

export default DashReview;
