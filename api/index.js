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
  WishList,
} = require("./src/db.js");

const { createMockUps } = require("./src/utils/createMockUps.js");

const { categoryData } = require("./src/utils/mocks/category/categoryData.js");
const { brandData } = require("./src/utils/mocks/brand/brandData.js");
const { allMocks } = require("./src/utils/mocks/product/allMocks.js");
const { productSizeLogicData } = require("./src/utils/mocks/productSize/productSizeLogicData.js");
const { sizeData } = require("./src/utils/mocks/size/sizeData.js");
const { reviewData } = require("./src/utils/mocks/review/reviewData.js");
const { userData } = require("./src/utils/mocks/user/userData.js");


conn
  .sync({ force: false })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () =>
      console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`)
    );
    await createMockUps(Category, categoryData);
    await createMockUps(Brand, brandData);
    await createMockUps(Product, allMocks);
    await createMockUps(Size, sizeData);
    await productSizeLogicData();
    await createMockUps(Users, userData);
    await createMockUps(Reviews, reviewData);
  })
  .catch((e) => console.log("connection failed", e));
