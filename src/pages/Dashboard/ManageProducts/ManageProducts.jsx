import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";
import popupError from "../../../popup/popupError";
import popupSuccess from "../../../popup/popupSuccess";
import ManageProductItem from "./ManageProductItem/ManageProductItem";

const ManageProducts = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://young-journey-72414.herokuapp.com/watches")
        .then((data) => {
          setWatches(data.data);
          setLoading(false);
        });
    }, 800);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                        DELETE A WATCH FUNCTIONALITY                        */
  /* -------------------------------------------------------------------------- */
  const handleWatchDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3c4a49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (watches.length > 8) {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://young-journey-72414.herokuapp.com/manage_order/watch/${id}`
            )
            .then((data) => {
              const isDeleted = data.data.deletedCount;

              if (isDeleted) {
                popupSuccess("delete");
                const remaining = watches.filter((order) => order._id !== id);
                setWatches(remaining);
              }
            });
        }
      } else {
        popupError(
          "Sorry Hacker! We have to keep at least 8 watches in our treasure.. 😣"
        );
      }
    });
  };

  return (
    <section className="manage-products" data-aos="fade-in">
      <h1 className="mb-4 text-center" data-aos="fade-up">
        Manage All Products
      </h1>
      {loading ? (
        <div className="spinner-box">
          <FadeLoader color="#777777" />
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} className="g-4 mb-5">
          {watches.map((watch) => {
            return (
              <Col key={watch._id}>
                <ManageProductItem
                  handleWatchDelete={handleWatchDelete}
                  watch={watch}
                ></ManageProductItem>
              </Col>
            );
          })}
        </Row>
      )}
    </section>
  );
};

export default ManageProducts;
