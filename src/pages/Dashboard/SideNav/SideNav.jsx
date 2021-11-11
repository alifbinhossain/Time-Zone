import React, { useEffect, useState } from "react";
import "./SideNav.css";
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

const SideNav = () => {
  const { logOut, user, admin } = useAll();
  const [sidebar, setSidebar] = useState(false);
  let { url } = useRouteMatch();
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarData, setSideBarData] = useState(SidebarDataCustomer);

  useEffect(() => {
    if (admin) {
      setSideBarData(SidebarDataAdmin);
    }
  }, [admin]);

  const activeStyle = {
    backgroundColor: "#1a83ff",
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <h2>Welcome to dashboard {user?.displayName.split(" ")[0]} !</h2>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <h2 className="ms-4">Dashboard</h2>
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

            <li>
              <button onClick={logOut} className="btn-logout">
                <FiIcons.FiLogOut /> Log Out
              </button>
            </li>

            <li className="nav-home">
              <Link className="" to="/home">
                Back to main page
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideNav;
