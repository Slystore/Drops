const server = require("./src/app");
const { conn } = require("./src/db");

const {userData} = require("./src/utils/mocks/users-mock.js");
const seedReviews = require("./src/utils/mocks/reviews-mock.js");

const {categoryMockUp} = require("./src/utils/mocks/category.js");
const {brandMockUp} = require("./src/utils/mocks/brand.js");

const {nikeMockUp} = require("./src/utils/mocks/product/nike.js");
const {jordanMockUp} = require("./src/utils/mocks/product/jordan.js");
const {nikeMockUpPrueba} = require("./src/utils/mocks/product/nikePrueba.js");


const port = process.env.PORT || 3001

conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () => console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`));
    
    await userData();
    await seedReviews();
    await brandMockUp();
    await categoryMockUp();
    // await nikeMockUp();
    // await jordanMockUp();
    // await nikeMockUpPrueba();
})
  .catch((e) => console.log("connection failed", e));
