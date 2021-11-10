import React from "react";
import "./Review.css";
import { Card } from "react-bootstrap";
import quote from "../../../images/logo/testimonials.png";
import Rating from "react-rating";

const Review = ({ review }) => {
  const { name, address, text, rating } = review;
  return (
    <Card className="review">
      <Card.Img variant="top" src={quote} />
      <Card.Body className="card-body">
        <Card.Text className="description">{text}</Card.Text>
        <Card.Title className="name">{name}</Card.Title>
        <Card.Title className="address">{address}</Card.Title>
      </Card.Body>
      <Rating
        className="icon"
        initialRating={rating}
        readonly
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
      />
    </Card>
  );
};

export default Review;
