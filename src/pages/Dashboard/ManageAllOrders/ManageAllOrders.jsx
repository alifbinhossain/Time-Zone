import axios from "axios";
import "./ManageAllOrders.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import popupSuccess from "../../../popup/popupSuccess";
import AllOrderItem from "./AllOrderItem/AllOrderItem";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all_orders")
      .then((data) => setAllOrders(data.data));
  }, []); //get all orders from DB

  /* -------------------------------------------------------------------------- */
  /*                        DELETE A ORDER FUNCTIONALITY                       */
  /* -------------------------------------------------------------------------- */
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/my_order_list/${id}`)
          .then((data) => {
            console.log(data);
            const isDeleted = data.data.deletedCount;

            if (isDeleted) {
              popupSuccess("removed");
              const remaining = allOrders.filter((order) => order._id !== id);
              setAllOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <ul className="all-orders" data-aos="fade-up">
      <h1 className="text-center">All Orders</h1>
      <h3 className="total-orders">Total Orders : {allOrders.length}</h3>
      {allOrders.map((order, index) => (
        <AllOrderItem
          key={order._id}
          order={order}
          index={index}
          handleOrderDelete={handleOrderDelete}
        ></AllOrderItem>
      ))}
    </ul>
  );
};

export default ManageAllOrders;
