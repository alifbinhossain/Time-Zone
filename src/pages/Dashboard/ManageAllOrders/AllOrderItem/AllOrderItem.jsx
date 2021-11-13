import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import "./AllOrderItem.css";
import Swal from "sweetalert2";
import popupSuccess from "../../../../popup/popupSuccess";

const AllOrderItem = ({ order, index, handleOrderDelete }) => {
  const { email, date, watch, status, _id } = order;
  const { name } = watch;
  const [checked, setChecked] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    if (status === "confirm") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                     UPDATE A ORDER STATUS FUNCTIONALITY                    */
  /* -------------------------------------------------------------------------- */
  const handleUpdateStatus = () => {
    Swal.fire({
      title: "Do you want to change this order status?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3c4a49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setChecked(!checked);
        if (!checked) {
          order.status = "confirm";
        } else {
          order.status = "pending";
        }
        axios
          .put(
            `https://young-journey-72414.herokuapp.com/all_orders/${_id}`,
            order
          )
          .then((data) => {
            const isUpdated = data.data.modifiedCount;
            if (isUpdated) {
              popupSuccess("status");
              setCurrentStatus(order.status);
            }
          });
      }
    });
  };

  return (
    <li className="all-order-item" data-aos="fade-right" data-aos-offset="20">
      <h5>
        {" "}
        {index + 1} . {name}
      </h5>
      <p>{email}</p>
      <p>date : {date}</p>

      <p className="d-flex align-items-center justify-content-center">
        order status : <span className="status">{currentStatus}</span>
        <Switch
          onChange={handleUpdateStatus}
          checked={checked}
          className="ms-2 react-switch"
          onHandleColor="#92EC7F"
          handleDiameter={24}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={16}
          width={38}
          id="material-switch"
        />
      </p>

      <button className="btn-delete" onClick={() => handleOrderDelete(_id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default AllOrderItem;
