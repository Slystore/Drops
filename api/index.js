const server = require("./src/app");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001;

const {
  Category,
  Brand,
  Product,
  ProductSize,
  Size,
  Reviews,
  Users,
  Orders,
  WishList,
  BranchOffice
} = require("./src/db.js");

const { createMockUps } = require("./src/utils/createMockUps.js");

const { categoryData } = require("./src/utils/mocks/category/categoryData.js");
const { brandData } = require("./src/utils/mocks/brand/brandData.js");
const { allMocks } = require("./src/utils/mocks/product/allMocks.js");
const { productSizeLogicData } = require("./src/utils/mocks/productSize/productSizeLogicData.js");
const { sizeData } = require("./src/utils/mocks/size/sizeData.js");
const { reviewData } = require("./src/utils/mocks/review/reviewData.js");
const { userData } = require("./src/utils/mocks/user/userData.js");
const { orderData } = require('./src/utils/mocks/order/orderData.js');
const { orderDetailLogicData } = require('./src/utils/mocks/orderDetail/orderDetailLogicData.js');
const { branchOfficeData } = require('./src/utils/mocks/branchOffice/branchOfficeData.js');
conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () =>
      console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`)
    );
    await createMockUps(BranchOffice, branchOfficeData);
    await createMockUps(Category, categoryData);
    await createMockUps(Brand, brandData);
    await createMockUps(Product, allMocks);
    await createMockUps(Size, sizeData);
    await productSizeLogicData();
    await createMockUps(Users, userData);
    await createMockUps(Reviews, reviewData);
    await createMockUps(Orders, orderData);
    await orderDetailLogicData();
  })
  .catch((e) => console.log("connection failed", e));
