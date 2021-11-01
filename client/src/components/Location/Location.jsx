import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Map from '../Map/Map';
import './Location.css';

function Location() {
    return (
        <div className="LocationContainer" id="Location">
            <div className="SubLocation">
                <div className="Location">
                    <Map />
                </div>
                <div className="Form">
                    <Box sx={{ height: 130, marginTop: 2 }}>
                        <Typography variant="h4"  sx={{ marginBottom: 1, fontWeight: 700 }} ><p className="TitleLocation">Ponte en contacto con nosotros</p> </Typography>
                        <Typography variant="h6" ><p  className="SubTitleLocation">Cualquier duda que tengas por favor comunícate por medio del siguiente formulario y con gusto te apoyaremos.</p> </Typography>
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
