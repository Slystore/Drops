import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./nav.css";
import { MdLineStyle, MdTrendingUp } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {
  MdProductionQuantityLimits,
  MdOutlineLocalShipping,
  MdOutlineCategory,
} from "react-icons/md";
import { GiConverseShoe, GiExitDoor } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { SiNike } from "react-icons/si";

const AdminNavBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarImg">
        <Link to="/">
          <img className="img" alt="" src={Logo} />
        </Link>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdLineStyle className="sidebarIcon" />
              <Link to="/admin/home">Panel</Link>
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon" />
              <Link to="/admin/onSale">Ofertas</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <GiConverseShoe className="sidebarIcon" />
              <Link to="/admin/products">Productos</Link>
            </li>
            <li className="sidebarListItem">
              <MdOutlineCategory className="sidebarIcon" />
              <Link to="/admin/categories">Categorías</Link>
            </li>
            <li className="sidebarListItem">
              <SiNike className="sidebarIcon" />
              <Link to="/admin/brands">Marcas</Link>
            </li>
            <li className="sidebarListItem">
              <FaUsers className="sidebarIcon" />
              <Link to="/admin/users">Usuarios</Link>
            </li>
            <li className="sidebarListItem ">
              <MdProductionQuantityLimits className="sidebarIcon" />
              <Link to="/admin/orders">Reportes</Link>
            </li>
            <li className="sidebarListItem">
              <GiExitDoor className="sidebarIcon" />
              <Link to="/">Volver</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AdminNavBar;
