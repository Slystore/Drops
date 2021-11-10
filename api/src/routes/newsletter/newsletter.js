const { Router } = require('express')
const router = Router()
const mailchimp = require('@mailchimp/mailchimp_marketing');
const { MAILCHIMP_APIKEY, MAILCHIMP_SERVER, LISTID } = process.env

mailchimp.setConfig({
  apiKey: MAILCHIMP_APIKEY,
  server: MAILCHIMP_SERVER,
});

router.get('/', async (req, res, next) => {
    try {
        // const response = await mailchimp.lists.getAllLists();
        // "id": "b78e42cd84",
        // "web_id": 538834,
        // const response = await mailchimp.lists.getList('b78e42cd84');
        // const response = await mailchimp.lists.getListMembersInfo(LISTID);
        // const response = await mailchimp.templates.list();
        // let prueba = response.templates.map(e => e.id)
        // [ 1010, 2000121, 2000120, 2000119, 2000118, 2000122, 1009, 1008,1007, 1006]
        // const response = await mailchimp.templates.getTemplate("1010")
        // const response = await mailchimp.campaigns.list()
        // 66c66c4f40
        const response = await mailchimp.campaigns.get("66c66c4f40");
        // console.log(prueba)
        res.json(response)
    } catch (error) {
        next(error)
    }
})

router.post('/subscribe', async (req, res, next) => {
    const {email} = req.body

    try {
        if(email){

            const response = await mailchimp.lists.addListMember(LISTID, {
                email_address: email,
                status: "pending",
              });
            
              console.log(
                `Successfully added contact as an audience member. The contact's id is ${
                  response.id
                }.`
              );
              res.json('Successfully added contact as an audience member')
           
     } else {
         res.status(404).json({message: 'You must enter a correct email'})
     }    
    } catch (error) {
        next(error)
    }
    
})

module.exports = router

