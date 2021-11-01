import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Newsletter.css'

import { useState, useEffect } from 'react';
 import { useDispatch } from 'react-redux';
import { postNewsletter } from './../../redux/newsletter/newsletterActions';

function Newsletter() {

  const dispatch = useDispatch();

   //aca ejecutamos action que trae las brands, categories y sizes

   useEffect(()=>{
     
   },[dispatch])


    //estado local para el formulario entero
    const [input, setInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault();

    setInput( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let prueba = {
        email: input
    }

    dispatch(postNewsletter(prueba))
  }
    return (
        <div className="NewsletterContainer">
            <Box>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Newsletter</Typography>
                <Typography variant="h5" sx={{}}>Regístrate y recibe por mail promociones y entérate antes de los nuevos productos.</Typography>

                <div className="FormNewsLetter">

                    <form  onSubmit={e => handleSubmit(e)} >
                        <input name='email' type="email" className="NewsletterInput" placeholder="Email" onChange={(e) => handleChange(e)}/>  
                        <input className="ButtonNewsletter hvr-grow-shadow" type="submit" name="email" value="Registrar"></input>
                    </form>

                </div>
            </Box>
        </div>
    )
}

export default Newsletter

