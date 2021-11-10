import React from "react";
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
    background: "-webkit-linear-gradient(top, #9E0000 0%, #fc4444 100%)",
    background: "linear-gradient(to top, #9E0000 0%, #fc4444 100%)",
    //   backgroundColor: theme.palette.common.white,
    height: 65,
    boxShadow: "0 5px 10px #00000080",
  },
}));

export const titleUserLog = (
  <div className="ToolTipsUser">
    <div className="LinkUserContainer">
      <a href="/profile">Mi profile</a>
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
      <a href="/">Adidas</a>
    </div>

    <div className="LinkMarcaContainer2">
      <a href="/">Balenciaga</a>
    </div>

    <div className="LinkMarcaContainer3">
      <a href="/">Gucci</a>
    </div>

    <div className="LinkMarcaContainer1">
      <a href="/">Nike</a>
    </div>

    <div className="LinkMarcaContainer2">
      <a href="/">Off-White</a>
    </div>

    <div className="LinkMarcaContainer3">
      <a href="/">Puma</a>
    </div>

    <div className="LinkMarcaContainer1">
      <a href="/">Reebok</a>
    </div>

    <div className="LinkMarcaContainer2">
      <a href="/">Vans</a>
    </div>

    <div className="LinkMarcaContainer3">
      <a href="/">Under</a>
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
      <a href="/">Urbano</a>
    </div>

    <div className="LinkCategoriaContainer1">
      <a href="/">Deportivo</a>
    </div>

    <div className="LinkCategoriaContainer1">
      <a href="/">Sandalias</a>
    </div>
  </div>
);
