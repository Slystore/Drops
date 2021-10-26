const server = require("./src/app");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001

conn
  .sync({ force: true })
  .then(async () => {
    console.log("DB connected!");
    server.listen(port, () => console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`));
  })
  .catch((e) => console.log("connection falied", e));
