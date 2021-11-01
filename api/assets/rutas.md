

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
