import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Map from '../Map/Map';
import ApiKey from '../../ApiKey';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './Location.css';

const enviarCorreo =(e) => {
    e.preventDefault()

    emailjs.sendForm(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, e.target, ApiKey.USER_ID).then(
        result => {
           
            swal("Correo enviado correctamente", {
                icon: "success",
                buttons: false,
                timer: 2000,
              });
              
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('subject').value = ''
            document.getElementById('message').value = ''
        },
        error => {
            alert( 'Ocurrio un error, intente nuevamente')
            }
    )
}


function Location() {
    return (
        <div className="LocationContainer" id="Location">
            <div className="SubLocation">
                <div className="Location">
                    <Map />
                </div>
                <div className="Form">
                    <Box sx={{ height: 130, marginTop: 2, marginBottom: 3 }}>
                        <Typography variant="h4"  sx={{ marginBottom: 1, fontWeight: 700 }} ><p className="TitleLocation">Ponte en contacto con nosotros</p> </Typography>
                        <Typography variant="h6" ><p  className="SubTitleLocation">Cualquier duda que tengas por favor comunícate por medio del siguiente formulario y con gusto te apoyaremos.</p> </Typography>
                    </Box>
                    <Box>
                        <form onSubmit = {enviarCorreo}>
                            <input className="InputFormContact" type="text" name="name" id="name" placeholder="Nombre" required></input>
                            <input className="InputFormContact" type="email" name="email" id="email" placeholder="Email"  required></input>
                            <input className="InputFormContact" type="text" name="subject" id="subject" placeholder="Asunto" required></input>
                            <textarea className="TextAreaFormContact" placeholder="Mensaje" name="message" id="message" required></textarea>
                            <input className="ButtonFormContact hvr-grow-shadow" type="submit" name="submit" value="Enviar"></input>
                        </form>
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default Location
