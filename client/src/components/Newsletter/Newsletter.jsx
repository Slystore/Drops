import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Newsletter.css'

function Newsletter() {

    return (
        <div className="NewsletterContainer">
            <Box>
                <Typography variant="h4"><p  className="NewsletterTitle">Newsletter</p></Typography>
                <Typography variant="h5"><p className="NewsletterSubTitle">Regístrate y recibe por mail promociones y entérate antes de los nuevos productos.</p></Typography>
                <div className="FormNewsLetter">
                    <form>
                        <input type="email" className="NewsletterInput" placeholder="Email" />  
                        <input className="ButtonNewsletter hvr-grow-shadow" type="submit" name="submit" value="Registrar"></input>
                    </form>
                </div>
            </Box>
        </div>
    )
}

export default Newsletter