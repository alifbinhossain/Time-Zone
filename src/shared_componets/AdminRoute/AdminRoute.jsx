import React from "react";
import { Redirect, Route } from "react-router";
import { FadeLoader } from "react-spinners";
import useAll from "../../hooks/useAll";

const AdminRoute = ({ children, ...rest }) => {
  const { user, loading, admin } = useAll();

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
        user && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
