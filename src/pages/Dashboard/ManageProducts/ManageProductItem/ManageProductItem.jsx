import React from "react";
import "./ManageProductItem.css";
import { Card } from "react-bootstrap";

const ManageProductItem = ({ watch, handleWatchDelete }) => {
  const { img1, img2, name, _id } = watch;
  return (
    <Card className="manage-item-card" data-aos="zoom-in">
      <Card.Img variant="top" src={img1} />
      <Card.Img variant="top" src={img2} className="image-hover" />
      <Card.Body className="card-body d-flex flex-column justify-content-between">
        <Card.Title className="card-title">{name}</Card.Title>
        <div className=" btn-box">
          <button className="me-3">
            <i class="fas fa-edit"></i>
          </button>
          <button onClick={() => handleWatchDelete(_id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ManageProductItem;
