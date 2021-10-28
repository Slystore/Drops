const { Brand, Category, Product, Size } = require("../../../db.js");

const pumaMockUp = async () => {
  //-------------------stret wear -------------------//
  const pumaThunderSpectra = await Product.create({
    name: "Puma Thunder Spectra",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaThunderSpectraCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const pumaThunderSpectraBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaThunderSpectraSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaThunderSpectraBrand.addProduct(pumaThunderSpectra);
  pumaThunderSpectraCategory.addProduct(pumaThunderSpectra);
  pumaThunderSpectra.addSizes(pumaThunderSpectraSizes);

  // ============================================================ //

  const pumaRSX3Limestone = await Product.create({
    name: "Puma RS-X 3 Puzzle Limestone",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaRSX3LimestoneCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const pumaRSX3LimestoneBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaRSX3LimestoneSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaRSX3LimestoneBrand.addProduct(pumaRSX3Limestone);
  pumaRSX3LimestoneCategory.addProduct(pumaRSX3Limestone);
  pumaRSX3Limestone.addSizes(pumaRSX3LimestoneSizes);

  //-------------------stret wear -------------------//

  //-------------------deportivo -------------------//

  const pumaEvoSpeedTokyoFuture = await Product.create({
    name: "Puma evoSPEED TOKYO FUTURE",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaEvoSpeedTokyoFutureCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaEvoSpeedTokyoFutureBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaEvoSpeedTokyoFutureSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaEvoSpeedTokyoFutureBrand.addProduct(pumaEvoSpeedTokyoFuture);
  pumaEvoSpeedTokyoFutureCategory.addProduct(pumaEvoSpeedTokyoFuture);
  pumaEvoSpeedTokyoFuture.addSizes(pumaEvoSpeedTokyoFutureSizes);

  // ============================================================ //

  const pumaMagnifyNitroSP = await Product.create({
    name: "Puma Magnify Nitro SP",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaMagnifyNitroSPCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaMagnifyNitroSPBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaMagnifyNitroSPSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaMagnifyNitroSPBrand.addProduct(pumaMagnifyNitroSP);
  pumaMagnifyNitroSPCategory.addProduct(pumaMagnifyNitroSP);
  pumaMagnifyNitroSP.addSizes(pumaMagnifyNitroSPSizes);

  // ============================================================ //

  const pumaCellFraction = await Product.create({
    name: "Puma Cell Fraction",
    image: "",
    description: "",
    price: 105.35,
    status: "disponible",
  });

  const pumaCellFractionCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaCellFractionBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaCellFractionSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaCellFractionBrand.addProduct(pumaCellFraction);
  pumaCellFractionCategory.addProduct(pumaCellFraction);
  pumaCellFraction.addSizes(pumaCellFractionSizes);

  // ============================================================ //

  const pumaEternityNitro = await Product.create({
    name: "Puma Eternity Nitro",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaEternityNitroCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaEternityNitroBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaEternityNitroSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaEternityNitroBrand.addProduct(pumaEternityNitro);
  pumaEternityNitroCategory.addProduct(pumaEternityNitro);
  pumaEternityNitro.addSizes(pumaEternityNitroSizes);

  // ============================================================ //

  const pumaFuse = await Product.create({
    name: "Puma FUSE",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaFuseCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaFuseBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaFuseSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaFuseBrand.addProduct(pumaFuse);
  pumaFuseCategory.addProduct(pumaFuse);
  pumaFuse.addSizes(pumaFuseSizes);

  // ============================================================ //

  const pumaDeviateNitro = await Product.create({
    name: "Puma DEVIATE NITRO",
    image: "",
    description: "",
    price: 165.99,
    status: "disponible",
  });

  const pumaDeviateNitroCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const pumaDeviateNitroBrand = await Brand.findOne({
    where: {
      id: 5,
    },
    attributes: ["id"],
  });

  const pumaDeviateNitroSizes = await Size.findAll({
    where: {
      id: [4, 5, 6, 7, 8, 9, 10],
    },
    attributes: ["id"],
  });

  pumaDeviateNitroBrand.addProduct(pumaDeviateNitro);
  pumaDeviateNitroCategory.addProduct(pumaDeviateNitro);
  pumaDeviateNitro.addSizes(pumaDeviateNitroSizes);
  //-------------------deportivo -------------------//
};

module.exports = { pumaMockUp };
