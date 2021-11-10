import React from "react";
import { Redirect, Route } from "react-router";
import { FadeLoader } from "react-spinners";
import useAll from "../../hooks/useAll";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAll();

  if (loading) {
    return (
      <div className="spinner-box" style={{ minHeight: "100vh" }}>
        <FadeLoader color="#777777" />
      </div>
    );
  } //initial loading before getting user information

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/form/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
