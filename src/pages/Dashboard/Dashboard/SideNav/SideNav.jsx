import React, { useEffect, useState } from "react";
import "./SideNav.css";
import logo from "../../../images/logo/logo-mobile.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  SidebarDataAdmin,
  SidebarDataCustomer,
} from "../SidebarData/SidebarData";
import useAll from "../../../hooks/useAll";
import Swal from "sweetalert2";

const SideNav = () => {
  const { logOut, user, admin } = useAll();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarData, setSideBarData] = useState(SidebarDataCustomer);
  let { url } = useRouteMatch();

  useEffect(() => {
    if (admin) {
      setSideBarData(SidebarDataAdmin);
    }
  }, [admin]);

  const activeStyle = {
    backgroundColor: "#fff",
    color: "#3c4a49",
  };

  /* -------------------------------------------------------------------------- */
  /*                        SIGN OUT BUTTON FUNCTIONALITY                       */
  /* -------------------------------------------------------------------------- */
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3c4a49",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(true);
      }
    }); //log out confirmation checking popup
  };

  return (
    <>
      <IconContext.Provider value={{ color: "currentColor" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {/* 
          <h2>Welcome to the dashboard {user?.displayName.split(" ")[0]} !</h2> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* <h2 className="ms-4">Dashboard</h2> */}
            <img className="dash-logo" src={logo} alt="" />
            <hr />
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink activeStyle={activeStyle} to={`${url}${item.path}`}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}

            <hr />
            <li>
              <button onClick={handleLogOut} className="btn-logout">
                <FiIcons.FiLogOut /> Log Out
              </button>
            </li>

            <li className="nav-home">
              <Link className="" to="/home">
                Go back to the main page
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideNav;
