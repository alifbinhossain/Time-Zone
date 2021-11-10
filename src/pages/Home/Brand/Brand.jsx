import React from "react";
import { Card } from "react-bootstrap";

const Brand = ({ brand }) => {
  const { img } = brand;
  console.log(img);
  return (
    <Card>
      <Card.Img variant="top" src={img} />
    </Card>
  );
};

export default Brand;
