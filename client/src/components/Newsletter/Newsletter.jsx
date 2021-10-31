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
    
    console.log('holis')
    console.log(input)
    dispatch(postNewsletter(input))
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

// app.get('', (req, res) => {
//     const options = {
//         url: 'https://us5.admin.mailchimp.com/lists/b78e42cd84',
//         method: 'POST',
//         headers: {
//             authorization: 'auth ceb8db134282b4535bc677188551aa0a-us5'
//         },
//         body: postData
//     };
    
//     request(options, (err, response, body) => {
//         if(err){
//             res.redirect()
//         }else{
//             if(response.statusCode === 200) res.redirect()
//             else res.redirect()
//         }
//     })

// })


// app.post('/signup', (req, res) => {
//     const { email } = req.body;
  
//     // Make sure fields are filled
//     if (!email) {
//       res.redirect('/fail.html');
//       return;
//     }
  
//     // Construct req data
//     const data = {
//       members: [
//         {
//           email_address: email,
//           status: 'subscribed', //status: 'pending'
//         //   merge_fields: {
//         //     FNAME: firstName,
//         //     LNAME: lastName
//         //   }
//         }
//       ]
//     };
  
//     const postData = JSON.stringify(data);
  
//     fetch('https://us5.admin.mailchimp.com/3.0/lists/b78e42cd84', {
//       method: 'POST',
//       headers: {
//         Authorization: 'auth ceb8db134282b4535bc677188551aa0a-us5'
//       },
//       body: postData
//     })
//       .then(res.statusCode === 200 ?
//         res.redirect('/success.html') :
//         res.redirect('/fail.html'))
//       .catch(err => console.log(err))
//   })