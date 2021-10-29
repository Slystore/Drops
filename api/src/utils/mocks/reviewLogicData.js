const { Reviews } = require("../../db.js");
const { reviewData } = require("./reviewData.js");

const logicData = async () => {
  for (let item of reviewData) {
    await Reviews.create(item);
  }
};

module.exports = { logicData };
