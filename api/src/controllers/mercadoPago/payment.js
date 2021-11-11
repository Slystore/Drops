const { Orders, Product, OrderDetail, Users } = require("../../db");

const { PROD_ACCESS_TOKEN } = process.env;
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: PROD_ACCESS_TOKEN
  });


//mercadopago/pagos
async function payment(req, res, next) {
    // console.log('FUNCION PAYMEEEENT')
    const {
        payment_id,         //1239191891
        status,             //approved
        external_reference, //faac272e-a92d-4a15-a472-c9363559aa00
        //El resto no lo estamos usando
        collection_id,      //1239191891
        payment_type,       //credit_card
        collection_status,  //approved
        merchant_order_id,  //3014520874
        preference_id,      //794718240-10459525-b2bf-4bba-b3fb-fae0b736861a
        site_id,            //MLA
        processing_mode,    //aggregator
        merchant_account_id,//null
} = req.query;
console.log(req.query)
//Obtenemmos el mail del user
// const orderm = await Order.findByPk('cc64ab40-bd46-4b02-9cac-277301c294d8',
const orderm = await Orders.findByPk(external_reference,
    {include: [
        {
            model: Users,
            attributes: ["mail", "name", "surname"]
        }]}
        );
    Orders.findByPk(external_reference)
        .then(order => {
            order.payment_id = payment_id;
            order.paymentState = status
            order.status = 'completed'
            order.save()
                .then(() => {
                    console.info('redict sucess')
                    
                    return res.redirect("http://localhost:3000/catalogue")
                })
                .catch(error => {
                    return res.redirect(`http://localhost:3000/catalogue/?error=${error}&where=al+salvar`)
                })
        })
        .catch(error => {
            return res.redirect(`http://localhost:3000/catalogue/error=${error}&where=al+buscar`)
        })

}
//mercadopago/pagos

async function pagosId(req, res) {
    console.log('pagosId access_token,', PROD_ACCESS_TOKEN)
    // const mp = new mercadopago(access_token)
    const mp = new mercadopago(PROD_ACCESS_TOKEN)
    const id = req.params.id
    console.info("Buscando el id", id)
    mp.get(`/v1/payments/search`, { 'status': 'pending' })//{"external_reference":id})
        .then(resultado => {
            console.info('resultado', resultado)
            res.json({ "resultado": resultado })
        })
        .catch(err => {
            console.error('No se consulto:', err)
            res.json({
                error: err
            })
        })

}
/*
4509 9535 6623 3704
11/25
123
American de prueba
371180303257522
11/25
1234
Secuencia despues pagar y volver al sitio
GET /mercadopago/pagos
collection_id          = 1239191891
collection_status      = approved
payment_id             = 1239191891
status                 = approved
external_reference     = faac272e-a92d-4a15-a472-c9363559aa00
payment_type           = credit_card
merchant_order_id      = 3014520874
preference_id          = 794718240-10459525-b2bf-4bba-b3fb-fae0b736861a
site_id                = MLA
processing_mode        = aggregator
merchant_account_id    = null
*/


module.exports =     payment,
    pagosId;
