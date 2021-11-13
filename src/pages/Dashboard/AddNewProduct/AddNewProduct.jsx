import React from "react";
import "./AddNewProduct.css";
import { useForm } from "react-hook-form";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from "axios";
import popupSuccess from "../../../popup/popupSuccess";

const AddNewProduct = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm(); //import from react hook form

  const onSubmit = (data) => {
    const newWatch = {
      name: data.name,
      img1: data.img1,
      img2: data.img2,
      description: data.description,
      price: Number(data.price) || 4750,
      discount: Number(data.discount) || 25,
      rating: Number(data.rating) || 4.5,
      reviews: Number(data.reviews) || 12,
    }; //new watch object information

    axios
      .post("https://young-journey-72414.herokuapp.com/watches", newWatch)
      .then((data) => {
        const isAdded = data.data.insertedId;
        if (isAdded) {
          popupSuccess("new watch");
          reset();
        }
      }); //adding new watch to DB & received confirmation response
  };

  return (
    <section className="add-products" data-aos="fade-in">
      <h1 data-aos="fade-up">Add New Watch</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3" xs={1} lg={3}>
          {/* -------------------------------------------------------------------------- */
          /*                                 TITLE FIELD                                */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridName">
            <FloatingLabel controlId="floatingInput" label="Watch Name">
              <Form.Control
                type="name"
                placeholder="title"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>Title is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                               IMAGE URL FIELD                              */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Image 1 Url">
              <Form.Control
                type="name"
                placeholder="url"
                {...register("img1", { required: true })}
              />
            </FloatingLabel>
            {errors.img1?.type === "required" && (
              <small>Image 1 is required.</small>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Image 2 Url">
              <Form.Control
                type="name"
                placeholder="url"
                {...register("img2", { required: true })}
              />
            </FloatingLabel>
            {errors.img2?.type === "required" && (
              <small>Image 2 is required.</small>
            )}
          </Form.Group>
        </Row>

        <Row className="mb-3" xs={2} lg={4}>
          {/* -------------------------------------------------------------------------- */
          /*                                 PRICE FIELD                                */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Price">
              <Form.Select
                defaultValue="Choose..."
                {...register("price", { required: true })}
              >
                <option value="2250">2250</option>
                <option value="2750">2750</option>
                <option value="3250">3250</option>
                <option value="3750">3750</option>
                <option value="4250">4250</option>
                <option value="4750">4750</option>
                <option value="5250">5250</option>
                <option value="5750">5750</option>
                <option value="6250">6250</option>
                <option value="6750">6750</option>
              </Form.Select>
              {errors.price?.type === "required" && (
                <small>Price is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Discount">
              <Form.Select
                defaultValue="Choose..."
                {...register("discount", { required: true })}
              >
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="30">30</option>
              </Form.Select>
              {errors.discount?.type === "required" && (
                <small>Discount is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                                RATING FIELD                                */
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

          {/* -------------------------------------------------------------------------- */
          /*                             TOTAL REVIEW FIELD                             */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Total Reviews">
              <Form.Select
                defaultValue="Choose..."
                {...register("reviews", { required: true })}
              >
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Form.Select>
              {errors.reviews?.type === "required" && (
                <small>Review is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>
        </Row>

        {/* -------------------------------------------------------------------------- */
        /*                              DESCRIPTION FIELD                             */
        /* -------------------------------------------------------------------------- */}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel
            controlId="floatingInput"
            label="Description (minimum 200 words)"
          >
            <Form.Control
              as="textarea"
              style={{ height: "200px" }}
              {...register("description", { required: true })}
            />
            {errors.description?.type === "required" && (
              <small>Description is required.</small>
            )}
          </FloatingLabel>
          <small>
            Follow the link to get a quick descriptions{" "}
            <a target="_blank" href="https://www.bremont.com/">
              www.bremont.com
            </a>{" "}
          </small>
        </Form.Group>

        <button className="btn-add" type="submit">
          Add Watch
        </button>
      </Form>
    </section>
  );
};

export default AddNewProduct;
