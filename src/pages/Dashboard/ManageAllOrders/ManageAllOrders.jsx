import axios from "axios";
import "./ManageAllOrders.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import popupSuccess from "../../../popup/popupSuccess";
import AllOrderItem from "./AllOrderItem/AllOrderItem";
import { FadeLoader } from "react-spinners";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/all_orders")
        .then((data) => {
          setAllOrders(data.data);
          setLoading(false);
        });
    }, 800);
  }, []); //get all orders from DB

  /* -------------------------------------------------------------------------- */
  /*                        DELETE A ORDER FUNCTIONALITY                       */
  /* -------------------------------------------------------------------------- */
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3c4a49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://young-journey-72414.herokuapp.com/my_order_list/${id}`
          )
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
    <ul className="all-orders" data-aos="fade-in">
      <h1 className="text-center" data-aos="fade-up">
        All Orders
      </h1>
      <h3 className="total-orders">Total Orders : {allOrders.length}</h3>
      {loading ? (
        <div className="spinner-box">
          <FadeLoader color="#777777" />
        </div>
      ) : (
        allOrders.map((order, index) => (
          <AllOrderItem
            key={order._id}
            order={order}
            index={index}
            handleOrderDelete={handleOrderDelete}
          ></AllOrderItem>
        ))
      )}
    </ul>
  );
};

export default ManageAllOrders;
