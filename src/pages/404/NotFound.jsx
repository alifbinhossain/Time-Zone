import React from "react";
import "./NotFound.css"; //import css style
import image from "../../images/others/404 Error with a cute animal-amico.svg";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const gotToHome = () => {
    history.push("/home");
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="error-page">
      <img src={image} alt="" />
      <div className="btn-box mt-4">
        <button onClick={gotToHome} className="btn btn-success me-3">
          Go to home
        </button>
        <button onClick={goBack} className="btn btn-light">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
