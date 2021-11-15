

RUTAS del BACK

<!-- Reviews -->
GET
/api/reviews/
/api/reviews/{id}
/api/reviews?product=
/api/reviews?user=
POST
/api/reviews/create
PUT
/api/reviews/update/{id}
DELETE
/api/reviews/delete/{id}

<!-- Users-->
GET
/api/allUser
/api/allUser/:id
/api/allUser

PUT
/api/edit/:id

POST
/api/register
/api/login

<!-- Products -->
GET
/api/products
/api/products/:id
/api/products?name=
/api/products=Brand=
/api/products=Category=
POST
/api/products/createProduct
PUT
api/products/updateProduct/:id
DELETE
api/products/deleteteProduct/:id

<!-- Categories -->
GET
/api/categories
/api/categories/:id
POST
/api/categories/createCategory
PUT
/api/categories/editCategory/:id
<!-- Brands -->
GET
/api/brands/getAllBrands

<!-- Sizes -->
GET
/api/sizes
/api/sizes/:id

<!-- ProductSizes -->
GET
/api/productSizes
/api/productSizes/:id

<!-- Orders -->
GET
/api/orders
/api/orders/:id
api/orders/userId/:id
POST
/api/orders/createOrder
PUT
/api/orders/updateOrder/:id
DELETE 
/api/orders/deleteOrder/:id
<!-- OrderDetails -->
GET
/api/orderDetails
/api/orderDetails/:id

<!-- Discounts -->
PUT 
/api/discounts/discount
PUT 
api/discounts/discount/:id
PUT
api/discounts/:id/discountOff
GET 
api/discounts/
POST
api/discounts/create