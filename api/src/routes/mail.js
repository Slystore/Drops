const { Router } = require("express");
const mail = require('../config/smtp-despacho');
const router = Router();

router.post("/send", async (req, res, next) => {
    try {
        console.log('hola desde el back')
        const { email } = req.body
        const { data } = req.body

        console.log(email)
        console.log(data)
        mail(email, data)

        res.json({msg: 'El mensaje ha sido enviado'})
    } catch (error) {
        next(error)
    }
});

module.exports = router;