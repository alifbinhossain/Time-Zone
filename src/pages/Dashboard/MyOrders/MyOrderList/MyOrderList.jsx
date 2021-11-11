import React from "react";
import "./MyOrderList.css";

const MyOrderList = ({ order, handleOrderDelete }) => {
  const { date, status, watch, _id } = order;
  const { name, img1, price, discount } = watch;

  return (
    <li className="my_orders-list" data-aos="fade-right" data-aos-offset="20">
      <div className="image-box">
        <img src={img1} alt="" />
        {status === "pending" && <p className="pending"></p>}
        {status === "confirm" && <p className="confirm"></p>}
      </div>

      <h5> {name}</h5>
      <h6>Order Date : {date}</h6>
      <h6 className="price">
        Price : €{(price - price * (discount / 100)).toFixed(2)}
      </h6>
      <button onClick={() => handleOrderDelete(_id)} className="btn-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default MyOrderList;
