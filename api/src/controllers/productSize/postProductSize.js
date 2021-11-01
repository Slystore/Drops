const { Product, Size, ProductSize } = require("../../db.js");

const postProductSize = async (req, res, next) => {
  try {
    let { stock, ProductId } = req.body;

    const findProductSize = await ProductSize.findAll({
      where: {
        ProductId: ProductId,
      },
    });

    let promises = [];

    findProductSize.forEach((el) => {
      promises.push(
        el.update(
          {stock: stock},
          {
            where: {
              ProductId: ProductId,
            },
          }
        )
      );
    });

    Promise.all(promises).then(
      function () {
        res.status(200).json(findProductSize);
      },
      function (err) {
        console.log(err)
      }
    );

  } catch (err) {
    console.log(err);
  }
};

module.exports = postProductSize;
