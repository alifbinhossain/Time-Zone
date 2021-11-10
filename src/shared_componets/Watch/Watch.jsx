import React, { useState } from "react";
import "./Watch.css";
import { Button, Card } from "react-bootstrap";

const Watch = ({ watch }) => {
  const { img1, img2, discount, name, price } = watch;

  return (
    <Card className="watch-card">
      <Card.Img variant="top" src={img1} />
      <Card.Img variant="top" src={img2} className="image-hover" />
      <Card.Text className="discount-text"> {discount}% off</Card.Text>
      <Card.Body className="card-body">
        <Card.Title className="title"> {name} </Card.Title>
        <Card.Text className="price">
          <span>
            <strike>€{price}</strike>
          </span>{" "}
          <br />
          <span>€{(price - price * (discount / 100)).toFixed(2)}</span>
        </Card.Text>
        <Card.Text className="price"></Card.Text>
        <Button variant="dark"> Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Watch;
