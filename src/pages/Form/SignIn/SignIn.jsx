import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useHistory, useLocation } from "react-router";
import useAll from "../../../hooks/useAll";
import popupSuccess from "../../../popup/popupSuccess";
import popupError from "../../../popup/popupError";

const Signin = () => {
  const {
    saveUser,
    signInWithEmail,
    signInWithSocial,
    facebookProvider,
    twitterProvider,
    googleProvider,
  } = useAll();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/dashboard";

  const onSubmit = (data) => {
    const userEmail = data.email;
    const userPassword = data.password;
    signInWithEmail(userEmail, userPassword)
      .then((result) => {
        popupSuccess("login");
        reset();
        history.push(redirectUrl);
      })
      .catch((err) => {
        popupError(err.message);
      });
  };

  const handleSignInWithSocial = (provider) => {
    signInWithSocial(provider)
      .then((res) => {
        const user = res.user;
        saveUser(user?.email, user?.displayName, "PUT");
        popupSuccess("login");
        history.push(redirectUrl);
      })
      .catch((err) => popupError(err.message));
  };

  return (
    <div className="form-signin" data-aos="fade-down">
      <h1 className="text-center">Sign In</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="form-input"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <small className="required-text">Email is required</small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-input"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <small className="required-text">Password is required</small>
          )}
        </Form.Group>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <Form.Check className="form-label" label="Remember me?" />
        </div>
        <Form.Group className="mb-3" controlId="formHorizontalCheck">
          <button className="w-100 btn-custom" type="submit">
            Sign In
          </button>
        </Form.Group>
      </Form>
      <small className="text-center d-block text-more-option">
        Or with Social Profile
      </small>
      <div className="social-btn-box my-3 d-flex justify-content-center align-items-center">
        <button
          className="btn-social"
          onClick={() => handleSignInWithSocial(googleProvider)}
        >
          <i className="fab fa-google"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => handleSignInWithSocial(facebookProvider)}
        >
          <i className="fab fa-facebook"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => handleSignInWithSocial(twitterProvider)}
        >
          <i className="fab fa-twitter"></i>
        </button>
      </div>

      <small className="text-center d-block">
        Dont have an account?
        <Link to="/form/signup" className="switch-link ms-1">
          Sign Up
        </Link>
      </small>
    </div>
  );
};

export default Signin;
