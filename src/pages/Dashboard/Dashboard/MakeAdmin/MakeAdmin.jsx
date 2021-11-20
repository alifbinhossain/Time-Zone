import React, { useEffect, useState } from "react";
import "./MakeAdmin.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import popupSuccess from "../../../popup/popupSuccess";
import popupError from "../../../popup/popupError";
import { FadeLoader } from "react-spinners";

const MakeAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/admins")
        .then((data) => {
          setAdmins(data.data);
          setLoading(false);
        });
    }, 500);
  }, []); //get all admins

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const adminInfo = {
      displayName: data.name,
      email: data.email,
    };
    axios
      .put("https://young-journey-72414.herokuapp.com/users/admin", adminInfo)
      .then((data) => {
        if (data.data.modifiedCount) {
          popupSuccess("create admin");
          let newAdmins = [...admins];
          newAdmins.push(adminInfo);
          setAdmins(newAdmins);

          reset();
        } else {
          popupError(
            "Sorry! We don't have any user with this email address..Please try again.."
          );
        }
      });
  }; //create an admin PUT request

  return (
    <section className="admin" data-aos="fade-in">
      <ul className="admin-list">
        <h2 data-aos="fade-up">Our Admins </h2>
        {loading ? (
          <div className="spinner-box">
            <FadeLoader color="#777777" />
          </div>
        ) : (
          admins.map((admin, index) => (
            <li key={index} className="admin-item" data-aos="fade-right">
              <h4 className="name">
                {index + 1}. Name : {admin?.displayName}
              </h4>
              <h4 className="email"> Email : {admin?.email}</h4>
            </li>
          ))
        )}
      </ul>

      <div className="admin-form">
        <h2 data-aos="fade-up">Create a New Admin</h2>
        <form onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in">
          <input placeholder="name" {...register("name", { required: true })} />
          {errors.name?.type === "required" && <small>Name is required</small>}

          <input
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <small>Email is required</small>}
          <input className="btn-admin mt-3" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
