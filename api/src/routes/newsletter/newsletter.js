const { Router } = require('express')
const axios = require('axios') 
const fetch = require('node-fetch') 

const router = Router()

router.post('/subscribe', async (req, res) => {
    const email = req.body
    if(email){
         // Construct req data
    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed', 
        }
      ]
    };

    const postData = JSON.stringify(data);

    fetch('https://us5.admin.mailchimp.com/3.0/lists/b78e42cd84', {
      method: 'POST',
      headers: {
        Authorization: 'auth ceb8db134282b4535bc677188551aa0a-us5'
      },
      body: postData
    })
      .then(res.status(200) ?
        res.json('hola') :
        res.json('chau'))
      .catch(err => console.log(err))
  }
})

module.exports = router