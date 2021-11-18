import React, { useEffect, useState } from "react";
import { getToken, getUserId} from "../../redux/users/userActions";
import jwt_decode from "jwt-decode";

import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { getProductsByName } from "../../redux/products/productsAction";
import {
  UserTooltip,
  TooltipsMarcas,
  TooltipsCategorias,
  titleUser,
  titleMarcas,
  titleCategorias,
  titleUserLog,
  titleAdminLog,
} from "./ToolTIps.js";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./NavBar.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  iconCart: {
    "&:hover": {
      color: "#f00",
      cursor: "pointer",
    },
    "@media (min-width: 1400px) ": {
      fontSize: 25,
    },
    "@media (min-width: 1200px) and (max-width: 1399px)": {
      fontSize: 14,
    },
  },
  iconUser: {
    "&:hover": {
      color: "#f00",
      cursor: "pointer",
    },
    "@media (min-width: 1400px)": {
      fontSize: 25,
    },
    "@media (min-width: 1200px)": {
      fontSize: 2,
    },
  },
}))


function NavBar() {
  const classes = useStyles();
  const [loged, setLoged] = useState({
    userState: false,
    userData: {},
    userAdmin: {},
  });

  const [userGoogleLocal, setuserGoogleLocal] = useState({
    userDataLocal: {},
  });

  useEffect(() => {
    const x = getToken();
    if (x.msg) {
      return setLoged({
        userState: false,
      });
    } else {
      const userDecoded = jwt_decode(x);
      setLoged({
        userState: true,
        userData: userDecoded,
        userAdmin: userDecoded.user ? userDecoded.user.userType : "",
      });
    }
  }, []);


  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const {items} = useSelector(state => state.cartReducers)
  
  var UserGoogle = localStorage.getItem('gId');

  useEffect(() => {
    dispatch(getUserId(UserGoogle));
  }, [dispatch]);
  
  const { userId } = useSelector(state => state.usersReducer)
  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    dispatch(getProductsByName(name));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductsByName(name));
  }

  function handleMenu(){
    let navigation = document.querySelector('.NavigationMobile')
    let MenuNavMob = document.querySelector('.MenuNavMobile')
    navigation.classList.toggle('active')
    MenuNavMob.classList.toggle('active')
  }

  return (
    <div className="NavContainer">
      <Box className="NavContainerMobile">
        <div className="LogoNavMobile">
          <Link to="/">
            <img src={logo} className="LogoMobile ball" alt="Logo" />  
          </Link>
        </div>
        <div className="MenuNavMobile" onClick={handleMenu}>
          <div className="IconMen"><MenuIcon /></div>
          <div className="IconMen"><CloseIcon /></div>
        </div>
        <ul className="NavigationMobile">
          <li><a className="LinkMobile" href="/">Inicio</a></li>
          <li><a className="LinkMobile" href="/login">Login</a></li>
          <li><a className="LinkMobile" href="/catalogue">Catálogo</a></li>
          <li><a className="LinkMobile" href="#Nosotros">Nosotros</a></li>
          <li><a className="LinkMobile" href="#Location">Contacto</a></li>
             <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{marginRight: '25%'}}
            >
              <Typography sx={{marginLeft: '45%', color: 'black', fontSize:18, fontFamily: 'Roboto', fontWeight: 'lighter'}}>Categorías</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="AccordMarcas">
                  <div className="LinkNavBarMobile"><a href="/products/bycategories/urbano">Urbano</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bycategories/deportivo">Deportivo</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bycategories/sandalias">Sandalias</a></div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} 
              sx={{ border: 'none',
                    '&:before': {
                      display: 'none',
                    },
                  }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{marginRight: '32%', border: 0}}
            >
              <Typography sx={{marginLeft: '63%', color: 'black', fontSize:18, fontFamily: 'Roboto', fontWeight: 'lighter'}}>Marcas</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 0}}>
              <div className="AccordMarcas">
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/nike">Nike</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/adidas">Adidas</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/puma">Puma</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/gucci">Gucci</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/balenciaga">Balenciaga</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/offwhite">Off-White</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/reebok">Reebok</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/vans">Vans</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/underarmour">Under</a></div>
                  <div className="LinkNavBarMobile"><a href="/products/bybrand/jordan">Jordan</a></div>

              </div>
            </AccordionDetails>
          </Accordion>

        </ul>
      </Box>
      <Box className="LogoContainer">
        <Link to="/">
          <img src={logo} className="LogoNav ball" alt="Logo"/>  
        </Link>
      </Box>
      <Box className="MenuContainer">
        <div>
          <ul>
            <TooltipsMarcas title={titleMarcas}>
              <li className="Menu swoopInTop ">marcas</li>
            </TooltipsMarcas>
            <TooltipsCategorias title={titleCategorias}>
              <li className="Menu swoopInTop">categorías</li>
            </TooltipsCategorias>
            <li className="Menu swoopInTop">
              <a href="/catalogue">catálogo</a>
            </li>
            <li className="Menu swoopInTop">
              <a href="/#Nosotros">nosotros</a>
            </li>
            <li className="Menu swoopInTop">
              <a href="/#Location" className="">
                contacto
              </a>
            </li>
          </ul>
        </div>
      </Box>
      <Box className="ToolsContainer">
        <div>
          <div className="Tool">
            <form className="FormSearch">
              <input
                type="search"
                className="SearchBar"
                placeholder="Buscar ..."
                onChange={handleInputChange}
              />
              <i
                className="fa fa-search spinIn"
                onClick={(e) => handleSubmit(e)}
                href="/catalogue"
              ></i>
            </form>
          </div>
          <Link to={'/shoppingCart'} >
          <div className="Tool spinIn">
             <Badge badgeContent={items? items.length: 0} color="error" sx={{color:'black'}}>
                <ShoppingCartIcon  className={classes.iconCart} sx={{transition: "0.5s all"}}/>{" "}
             </Badge>
          </div></Link>
          {console.log("USER_TYPE",loged.userAdmin)}
          {
              loged.userAdmin  ? (
                <UserTooltip title={loged.userAdmin === 'admin' ? titleAdminLog : titleUserLog}>
                  <div className="Tool spinIn">
                     <AccountCircleIcon className={classes.iconUser} sx={{transition: "0.5s all"}}/>
                 </div>
                </UserTooltip>
               ) 
              : userId.user ? (
                <UserTooltip title={userId.user.userType === 'admin' ? titleAdminLog : titleUserLog}>
                  <div className="Tool spinIn">
                     <AccountCircleIcon className={classes.iconUser} sx={{transition: "0.5s all"}}/>
                 </div>
                </UserTooltip>
              )
              :
              (
                <UserTooltip title={titleUser}>
                  <div className="Tool spinIn"> <AccountCircleIcon sx={{transition: "0.5s all", '&:hover':{color: 'red',cursor: "pointer"}}}/></div>
                </UserTooltip>
              )
          }
        </div>
      </Box>
    </div>
  );
}

export default NavBar;
