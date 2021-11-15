const { ProductSize, Product } = require("../../db.js");

const updateOrCreateProduct = async (data, id = null) => {
  let product;
  if (id) {
    product = await Product.findOne({
      where: {
        id,
      },
    });

    await product.update({
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      status: data.status,
      CategoryId: data.categoryId,
      BrandId: data.brandId,
    });
  } else {
    product = await Product.create({
      name: data.name,
      image: data.image,
      description: data.description,
      price: data.price,
      status: data.status,
      CategoryId: data.categoryId,
      BrandId: data.brandId,
      BranchOfficeId: 1
    });
  }

  for (let [sizeId, quant] of data.stock) {
    let productsize = await ProductSize.findOrCreate({
      where: {
        ProductId: product.id,
        SizeId: sizeId,
      },
    });
    await productsize[0].update({
      stock: quant,
    });
  }
  return product;
};

module.exports = { updateOrCreateProduct };
