import React from "react";
import "./Watch.css";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Watch = ({ watch }) => {
  const { img1, img2, discount, name, price, _id } = watch;
  const history = useHistory();

  const handleBooking = () => {
    history.push(`/booking/${_id}`);
  };

  return (
    <Card className="watch-card" data-aos="zoom-in">
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
        <Button onClick={handleBooking} variant="light">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Watch;
