import React from 'react';
import Box from '@mui/material/Box';
import logo from '../../assets/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { 
            UserTooltip, 
            TooltipsMarcas, 
            TooltipsCategorias, 
            titleUser, 
            titleMarcas,
            titleCategorias
        } from './ToolTIps.js';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavContainer">
            <Box className="LogoContainer">
                <Link to="/"><img src={logo} className="Logo ball" /></Link>
            </Box>
            <Box className="MenuContainer">
                <div>
                    <ul>
                        <TooltipsMarcas title={titleMarcas}><li className="Menu swoopInTop ">marcas</li></TooltipsMarcas>
                        <TooltipsCategorias title={titleCategorias}><li className="Menu swoopInTop">categorías</li></TooltipsCategorias>
                        <li className="Menu swoopInTop"><a href="/catalogue">catálogo</a></li>
                        <li className="Menu swoopInTop"><a href="#Nosotros">nosotros</a></li>
                        <li className="Menu swoopInTop"><a href="#Location" className="">contacto</a></li>
                        {/* <TooltipsMarcas title={titleMarcas}><li className="Menu swoopInTop hvr-float-shadow">marcas</li></TooltipsMarcas> */}
                        {/* <TooltipsCategorias><li className="Menu swoopInTop hvr-float-shadow">categorías</li></TooltipsCategorias> */}
                        {/* <li className="Menu swoopInTop hvr-float-shadow">nosotros</li>
                        <li className="Menu swoopInTop hvr-float-shadow">contacto</li> */}
                    </ul>
                </div>
            </Box>
            <Box className="ToolsContainer">
                <div>
                    <div className="Tool">
                        <form className="FormSearch">
                            <input type="search" className="SearchBar" placeholder="Buscar ..."/>
                            <i className="fa fa-search spinIn"></i>
                        </form>
                    </div>

                    <div className="Tool">
                        <ShoppingCartIcon
                            className="spinIn"
                            sx={{
                                    fontSize: 25,
                                    transition: '0.5s all',
                                    '&:hover': {
                                        color: '#f00',
                                        cursor: 'pointer'
                                }}}
                        />
                    </div>

                    <UserTooltip title={titleUser}>
                        <div className="Tool">
                            <AccountCircleIcon
                                className="spinIn"
                                sx={{
                                        fontSize: 25,
                                        transition: '0.5s all',
                                        '&:hover': {
                                            color: '#f00',
                                            cursor: 'pointer'
                                    }}}
                            />
                        </div>
                    </UserTooltip>
                </div>
            </Box>
        </div>
    )
}

export default NavBar


