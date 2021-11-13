import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAll from "../../../hooks/useAll";
import popupSuccess from "../../../popup/popupSuccess";
import MyOrderList from "./MyOrderList/MyOrderList";
import "./MyOrders.css";
import img from "../../../images/others/Waiting-pana.svg";
import { FadeLoader } from "react-spinners";

const MyOrders = () => {
  const { user } = useAll();
  const [loading, setLoading] = useState(true);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(
          `https://young-journey-72414.herokuapp.com/my_order/${user?.email}`
        )
        .then((data) => {
          setMyOrders(data.data);
          setLoading(false);
        });
    }, 800);
  }, []); //get current user orders

  const name = myOrders[0]?.name;
  const email = myOrders[0]?.email;
  const address = myOrders[0]?.address;
  /* -------------------------------------------------------------------------- */
  /*                         DELETE A ORDER FUNCTIONALITY                        */
  /* -------------------------------------------------------------------------- */
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to cancel this order?",
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
            const isDeleted = data.data.deletedCount;

            if (isDeleted) {
              popupSuccess("removed");
              const remaining = myOrders.filter((order) => order._id !== id);
              setMyOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="my-orders" data-aos="fade-in">
      {loading ? (
        <div className="spinner-box">
          <FadeLoader color="#777777" />
        </div>
      ) : myOrders.length ? (
        <>
          <div className="user-orders">
            <h1 className="text-center mb-4" data-aos="fade-up">
              My Orders
            </h1>
            <div
              className="user-info d-lg-flex align-items-center justify-content-center"
              data-aos="fade-in"
            >
              <h4>Name : {name}</h4>
              <h4>Email : {email}</h4>
              <h4>Address : {address}</h4>
              <h4> Total Orders : {myOrders.length}</h4>
            </div>

            <hr />
            <ul data-aos="fade-in">
              {myOrders.map((order) => (
                <MyOrderList
                  key={order._id}
                  order={order}
                  handleOrderDelete={handleOrderDelete}
                ></MyOrderList>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="no-order">
          <h1 data-aos="fade-up"> No Orders added yet!</h1>
          <img data-aos="fade-left" src={img} alt="" />
        </div>
      )}
    </section>
  );
};

export default MyOrders;
