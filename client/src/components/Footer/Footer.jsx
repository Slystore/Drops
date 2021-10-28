import React from 'react';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <div className="FooterContainer">
            <div style={{width:'95%', margin: '0 auto'}}><Divider /></div>
            <div style={{color: '#00000070', fontSize: '14px'}}>
                &copy; Derechos Reservados Drops 2021 <strong style={{color: '#000', padding: '0 5px'}}>|</strong> Diseño y Desarrollo Henry Students
            </div>
        </div>
    )
}

export default Footer
