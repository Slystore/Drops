const server = require("./src/app");
const { conn } = require("./src/db");

const {userData} = require("./src/utils/mocks/users-mock.js");
const seedReviews = require("./src/utils/mocks/reviews-mock.js");
const port = process.env.PORT || 3001

conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () => console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`));
    
    await userData();
    await seedReviews();
})
  .catch((e) => console.log("connection falied", e));
