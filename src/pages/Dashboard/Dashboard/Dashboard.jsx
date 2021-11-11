import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import AdminRoute from "../../../shared_componets/AdminRoute/AdminRoute";
import PrivateRoute from "../../../shared_componets/PrivateRoute/PrivateRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import DashReview from "../DashReview/DashReview";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import SideNav from "../SideNav/SideNav";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <SideNav></SideNav>
      <section className="dashboard-content">
        <Switch>
          <PrivateRoute exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </PrivateRoute>

          <PrivateRoute exact path={`${path}/home`}>
            <DashboardHome></DashboardHome>
          </PrivateRoute>

          <PrivateRoute exact path={`${path}/payment`}>
            <Payment></Payment>
          </PrivateRoute>

          <PrivateRoute exact path={`${path}/my_orders`}>
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute exact path={`${path}/review`}>
            <DashReview></DashReview>
          </PrivateRoute>

          <AdminRoute exact path={`${path}/manage_all_orders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
        </Switch>
      </section>
    </div>
  );
};

export default Dashboard;
