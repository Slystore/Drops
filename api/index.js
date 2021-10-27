const seedReviews = require("./src/utils/mocks/reviews");
const seedUsers = require("./seed");
const server = require("./src/app");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001
// const seed = require('./seed')

conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () => console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`));
    //relleno de users
    await seedUsers()
    //relleno de reviews
    await seedReviews()
  })
  .catch((e) => console.log("connection falied", e));
