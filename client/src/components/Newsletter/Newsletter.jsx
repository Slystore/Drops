import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Newsletter.css'

function Newsletter() {
    return (
        <div className="NewsletterContainer">
            <Box>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Newsletter</Typography>
                <Typography variant="h5" sx={{}}>Regístrate y recibe por mail promociones y entérate antes de los nuevos productos.</Typography>
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