import React from 'react';
import Box from '@mui/material/Box';
import logo from '../../assets/Logo.png';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

    searchBox.forEach(elm =>{
        elm.addEventListener('click', () => {
            elm.previousElementSibling.value='';
        })
    })

    return (
        <div className="NavContainer">
            <Box className="LogoContainer">
                <Link to="/"><img src={logo} className="Logo ball" /></Link>
            </Box>
            <Box className="MenuContainer">
                <div>
                    <ul>
                    <Link to="/" className="Link"><li className="Menu swoopInTop">marcas</li></Link>
                    <Link to="/" className="Link"><li className="Menu swoopInTop">categorías</li></Link>
                    <Link to="/" className="Link"><li className="Menu swoopInTop">nosotros</li></Link>
                    <Link to="/" className="Link"><li className="Menu swoopInTop">contacto</li></Link>
                    </ul>

                </div>
            </Box>
            <Box className="ToolsContainer">
                <div>
                    {/* <div className="search-box">
                        <input type="text" />
                        <span></span>
                        <SavedSearchIcon 
                        className="spinIn" 
                        sx={{fontSize: 25, 
                            transition: '0.5s all',  
                            '&:hover': { color: '#f00', cursor: 'pointer'}}} 
                        />
                    </div> */}
                    <div className="Tool">
                        <form>
                            <input type="search" placeholder="Buscar ..."/>
                            <i className="fa fa-search spinIn"></i>
                        </form>
                        {/* <input type="text" className="InputSearch"/>
                        <SavedSearchIcon className="spinIn search"  sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}}/> */}
                    </div>
                    <div className="Tool"><ShoppingCartIcon className="spinIn"  sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}}/></div>
                    <div className="Tool"><AccountCircleIcon className="spinIn" sx={{fontSize: 25, transition: '0.5s all',  '&:hover': { color: '#f00', cursor: 'pointer'}}}/></div>
                </div>
            </Box>
        </div>
    )
}

export default NavBar
