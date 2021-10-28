const server = require("./src/app");
const { conn } = require("./src/db");

const { userData } = require("./src/utils/mocks/users-mock.js");
const seedReviews = require("./src/utils/mocks/reviews-mock.js");

const { categoryMockUp } = require("./src/utils/mocks/category.js");
const { brandMockUp } = require("./src/utils/mocks/brand.js");
const { sizeMock } = require("./src/utils/mocks/sizes.js");

const { nikeMockUp } = require("./src/utils/mocks/product/nike.js");
const { jordanMockUp } = require("./src/utils/mocks/product/jordan.js");
const { offWhiteMockUp } = require("./src/utils/mocks/product/off-white.js");
const { adidasMockUp } = require("./src/utils/mocks/product/adidas.js");
const { adidasYeezyMockUp } = require("./src/utils/mocks/product/adidasYeezy.js");
const { pumaMockUp } = require("./src/utils/mocks/product/puma.js");
const { reebokMockUp } = require("./src/utils/mocks/product/reebok.js");
const { gucciMockUp } = require("./src/utils/mocks/product/gucci.js");
const { balenciagaMockUp } = require("./src/utils/mocks/product/balenciaga.js");
const { underArmourMockUp } = require("./src/utils/mocks/product/underArmour.js");
const { vansMockUp } = require("./src/utils/mocks/product/vans.js");
const port = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () =>
      console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`)
    );

    await userData();
    await seedReviews();
    await brandMockUp();
    await categoryMockUp();
    await sizeMock();
    //PRODUCTS
    await nikeMockUp();
    await jordanMockUp();
    await offWhiteMockUp();
    await adidasMockUp();
    await adidasYeezyMockUp();
    await pumaMockUp();
    await reebokMockUp();
    await gucciMockUp();
    await balenciagaMockUp();
    await underArmourMockUp();
    await vansMockUp();
  })
  .catch((e) => console.log("connection failed", e));
