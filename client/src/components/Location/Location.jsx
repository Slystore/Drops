import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Location.css';

function Location() {
    return (
        <div className="LocationContainer" id="Location">
            <div className="SubLocation">
                <div className="Location">

                </div>
                <div className="Form">
                    <Box sx={{height:130, marginTop:2}}>
                        <Typography variant="h4" sx={{marginBottom: 1, fontWeight:700}} >Ponte en contacto con nosotros </Typography>
                        <Typography variant="h6" >Cualquier duda que tengas por favor comunícate por medio del siguiente formulario y con gusto te apoyaremos. </Typography>
                    </Box>
                    <Box>
                        <form>
                            <input className="InputFormContact" type="text" name="name" placeholder="Nombre"></input>
                            <input className="InputFormContact" type="text" name="email" placeholder="Email"></input>
                            <input className="InputFormContact" type="text" name="subjet" placeholder="Asunto"></input>
                            <textarea className="TextAreaFormContact" placeholder="Mensaje"></textarea>
                            <input className="ButtonFormContact hvr-grow-shadow" type="submit" name="submit" value="Enviar"></input>
                        </form>
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default Location
