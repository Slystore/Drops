import React from 'react';
import Box from '@mui/material/Box';
import logo from '../../assets/Logo.png';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css'

function NavBar() {
    return (
        <div className="NavContainer">
            <Box className="LogoContainer">
                <img src={logo} className="Logo" />
            </Box>
            <Box className="MenuContainer">
                <div>
                    <ul>
                        <li className="Menu">marcas</li>
                        <li className="Menu">categorías</li>
                        <li className="Menu">nosotros</li>
                        <li className="Menu">contacto</li>
                    </ul>

                </div>
            </Box>
            <Box className="ToolsContainer">
                <div>
                    <div className="Tool"><SavedSearchIcon sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}} /></div>
                    <div className="Tool"><ShoppingCartIcon  sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}}/></div>
                    <div className="Tool"><AccountCircleIcon  sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}}/></div>
                </div>
            </Box>
        </div>
    )
}

export default NavBar
