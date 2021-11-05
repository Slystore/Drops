const { Orders } = require('../../db.js');

const { PROD_ACCESS_TOKEN } = process.env;

const server = require('express').Router();
  // SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// const { route } = require('./order');

// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN
});


server.get("/", (req, res, next)=>{
  //const id_orden = req.query.id
  
  const id_orden= 1

  // cargamos el carrido de la bd
  const carrito = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]

  console.info('ml configured')
  
  const items_ml = carrito.map(i => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }))

  console.info('carrito', items_ml)

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference : `${id_orden}`, //`${new Date().valueOf()}`,
    payment_methods :{
      excluded_payment_types: [
        { 
          id: "atm"  // Métodos de pago excluidos
        }
      ], 
      installments: 6 // Cantidad máxima de cuotas
    },
    back_urls: {
      success: 'http://localhost:3001/api/mercadopago/pagos',
      failure: 'http://localhost:3001/api/mercadopago/pagos',
      pending: 'http://localhost:3001/api/mercadopago/pagos',
    }
  };

  console.info('preference:', preference)
  
  mercadopago.preferences.create(preference)

  .then(function(response){
    console.info('respondio')
  // Este valor reemplazará el string"<%= global.id %>" en tu HTML
    global.id = response.body.id;
    console.log(response.body)
    res.json({id: global.id, init_point: response.body.init_point});
  }).catch(function(error){
    console.log(error);
  })


}) 

server.get("/pagos/:id", (req, res)=>{
  const mp = new mercadopago (PROD_ACCESS_TOKEN)
  const id = req.params.id
  console.info("Buscando el id", id)
  mp.get(`/v1/payments/search`, {'status': 'pending'})//{"external_reference":id})
  .then(resultado  => {
    console.info('resultado', resultado)
    res.json({"resultado": resultado})
  })
  .catch(err => {
    console.error('No se consulto:', err)
    res.json({
      error: err
    })
  })

})

server.get("/pagos", (req, res)=>{
  console.info("EN LA RUTA PAGOS ", req)
  const payment_id= req.query.payment_id
  const payment_status= req.query.status
  const external_reference = req.query.external_reference
  const merchant_order_id= req.query.merchant_order_id
  console.log("EXTERNAL REFERENCE ", external_reference)

  //Aquí edito el status de mi orden

  Orders.findByPk(external_reference)
  .then((order) => {
    order.paymentId= payment_id
    order.paymentStatus= payment_status
    order.merchantOrderId = parseInt(merchant_order_id) 
    order.status = "created"
    console.info('Salvando order')
    order.save()
    .then((_) => {
      console.info('redirect success')
      
      return res.redirect("http://localhost:3000")
    }).catch((err) =>{
      console.error('error al salvar', err)
      return res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`)
    })
  }).catch(err =>{
    console.error('error al buscar', err)
    return res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`)
  })


  //proceso los datos del pago 
  // redirijo de nuevo a react con mensaje de exito, falla o pendiente
  //res.send(`${payment_id} ${payment_status} ${external_reference} ${merchant_order_id} `)
})


module.exports = server;