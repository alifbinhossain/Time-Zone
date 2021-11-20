import React from "react";
import "./Dashboard.css";
import { Switch, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../../shared_componets/AdminRoute/AdminRoute";
import PrivateRoute from "../../../shared_componets/PrivateRoute/PrivateRoute";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import DashReview from "../DashReview/DashReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import SideNav from "../SideNav/SideNav";

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <section className="dashboard" data-aos="fade-in">
      <SideNav></SideNav>
      <section className="dashboard-content">
        <Switch>
          {/* -------------------------------------------------------------------------- */
          /*                         LOGGED IN CUSTOMER'S ROUTE                         */
          /* -------------------------------------------------------------------------- */}
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

          {/* -------------------------------------------------------------------------- */
          /*                                ADMIN ROUTES                                */
          /* -------------------------------------------------------------------------- */}
          <AdminRoute exact path={`${path}/manage_all_orders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>

          <AdminRoute exact path={`${path}/add_products`}>
            <AddNewProduct></AddNewProduct>
          </AdminRoute>

          <AdminRoute exact path={`${path}/manage_products`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>

          <AdminRoute exact path={`${path}/make_admin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </section>
    </section>
  );
};

export default Dashboard;
