import React from "react";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const logOut = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("gId");
  window.location.reload(false);
};
/****************************** TOOLTIPS USER ******************************************/
export const UserTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#FF0000",
    //   color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FF0000",
    background: "-moz-linear-gradient(top, #9E0000 0%, #fc4444 100%)",
    //   backgroundColor: theme.palette.common.white,
    height: 'auto',
    boxShadow: "0 5px 10px #00000080",
  },
}));

export const titleUserLog = (
  <div className="ToolTipsUser">
    <div className="LinkUserContainer">
      <a href="/profile">Mi profile</a>
    </div>

    <div className="LinkUserContainer">
      <a href="/admin/home">Admin</a>
    </div>

    <div className="LinkUserContainer">
      <a href="/" onClick={logOut}>
        Log out
      </a>
    </div>
  </div>
);
export const titleUser = (
  <div className="ToolTipsUser">
    <div className="LinkUserContainer">
      <a href="/login">Login</a>
    </div>

    <div className="LinkUserContainer">
      <a href="/register">Registrarse</a>
    </div>
  </div>
);

/**************************************************************************************/

export const TooltipsMarcas = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    minWidth: "255px",
    height: 90,
    boxShadow: "0 5px 10px #00000080",
  },
}));

export const titleMarcas = (
  <div className="ToolTipsMarca">
    <div className="LinkMarcaContainer1">
      <Link to="/products/bybrand/adidas">
        <a>Adidas</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer2">
      <Link to="/products/bybrand/balenciaga">
        <a>Balenciaga</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer3">
      <Link to="/products/bybrand/gucci">
        <a>Gucci</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer1">
      <Link to="/products/bybrand/nike">
        <a>Nike</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer2">
      <Link to="/products/bybrand/offwhite">
        <a>Off-White</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer3">
      <Link to="/products/bybrand/puma">
        <a>Puma</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer1">
      <Link to="/products/bybrand/reebok">
        <a>Reebok</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer2">
      <Link to="/products/bybrand/vans">
        <a>Vans</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer3">
      <Link to="/products/bybrand/underarmour">
        <a>Under Armour</a>
      </Link>
    </div>

    <div className="LinkMarcaContainer1">
      <Link to="/products/bybrand/jordan">
        <a>Jordan</a>
      </Link>
    </div>
  </div>
);

/**************************************************************************************/

export const TooltipsCategorias = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    minWidth: 90,
    height: 100,
    boxShadow: "0 5px 10px #00000080",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const titleCategorias = (
  <div className="ToolTipsMarca">
    <div className="LinkCategoriaContainer1">
      <Link to="/products/bycategories/urbano">
        <a href="/">Urbano</a>
      </Link>
    </div>

    <div className="LinkCategoriaContainer1">
      <Link to="/products/bycategories/deportivo">
        <a href="/">Deportivo</a>
      </Link>
    </div>

    <div className="LinkCategoriaContainer1">
      <Link to="/products/bycategories/sandalias">
        <a href="/">Sandalias</a>
      </Link>
    </div>
  </div>
);
