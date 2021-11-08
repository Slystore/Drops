import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png"
import "./nav.css"
import { MdLineStyle, MdTrendingUp } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { MdProductionQuantityLimits, MdOutlineLocalShipping, MdOutlineCategory } from "react-icons/md"
import { GiConverseShoe } from "react-icons/gi"
import { AiOutlineMail } from "react-icons/ai"
import { SiNike } from "react-icons/si"


const AdminNavBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarImg'>
                <img className='img' src={Logo} />
            </div>
            <div className='sidebarWrapper'>

                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MdLineStyle className='sidebarIcon' />
                            <Link to="/admin/home">
                                Home
                            </Link>
                        </li>
                        <li className='sidebarListItem'>
                            <MdTrendingUp className='sidebarIcon' />
                            <Link to="/admin/onSale">
                                Ofertas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">
                        Menu
                    </h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <GiConverseShoe className='sidebarIcon' />
                            <Link to="/admin/products">
                                Productos
                            </Link>

                        </li>
                        <li className='sidebarListItem'>
                            <MdOutlineCategory className='sidebarIcon' />
                            <Link to="/admin/categories">
                                Categorias
                            </Link>
                        </li>
                        <li className='sidebarListItem'>
                            <SiNike className='sidebarIcon' />
                            <Link to="/admin/brands">
                                Marcas
                            </Link>
                        </li>
                        <li className='sidebarListItem'>
                            <FaUsers className='sidebarIcon' />
                            <Link to="/admin/users">
                                Users
                            </Link>

                        </li>
                        <li className='sidebarListItem'>
                            <MdProductionQuantityLimits className='sidebarIcon' />
                            <Link to="/admin/orders">
                                Reportes
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">
                        Informacion
                    </h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <AiOutlineMail className='sidebarIcon' />
                            <Link to="/admin/newsletter">
                                Newsletter
                            </Link>
                        </li>
                        <li className='sidebarListItem'>
                            <MdOutlineLocalShipping className='sidebarIcon' />
                            <Link to="/admin/appointment">
                                Turnos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}
{/* <Link to='/admin/orders'> <a> Orders </a> </Link>
            <Link to='/admin/products'> <a> Products </a> </Link>
            <Link to='/admin/users'> <a> Users </a> </Link>
            <Link to='/admin/newsletter'> <a> Newsletter </a> </Link>
            <Link to='/admin/appointment'> Turnos </Link>
            <Link to='/admin/onsale'> <a> Ofertas </a> </Link> */}

export default AdminNavBar