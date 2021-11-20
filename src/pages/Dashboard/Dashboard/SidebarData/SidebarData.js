import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

const SidebarDataCustomer = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <MdIcons.MdPayment />,
    cName: "nav-text",
  },
  {
    title: "My Orders",
    path: "/my_orders",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Review",
    path: "/review",
    icon: <MdIcons.MdRateReview />,
    cName: "nav-text",
  },
];

const SidebarDataAdmin = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Manage All Orders",
    path: "/manage_all_orders",
    icon: <AiIcons.AiFillShop />,
    cName: "nav-text",
  },
  {
    title: "Add a Product",
    path: "/add_products",
    icon: <AiIcons.AiFillFolderAdd />,
    cName: "nav-text",
  },
  {
    title: "Manage Products",
    path: "/manage_products",
    icon: <MdIcons.MdOutlineSettingsSuggest />,
    cName: "nav-text",
  },
  {
    title: "Create an Admin",
    path: "/make_admin",
    icon: <RiIcons.RiAdminFill />,
    cName: "nav-text",
  },
];

export { SidebarDataCustomer, SidebarDataAdmin };
