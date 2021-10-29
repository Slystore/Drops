const createMockUps = async (model, data) => {
  for (let item of data) {
    await model.create(item);
  }
};

module.exports = {createMockUps};
