const { Brand, Category, Product, Size } = require("../../../db.js");

const adidasMockUp = async () => {
  // -------------------------Deportivo--------------------------- //

  const boostDna = await Product.create({
    name: "Adidas Ultra Boost DNA Star Wars Princess Leia",
    image: "",
    description: "",
    price: 120.25,
    status: "disponible",
  });

  const boostDnaCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const boostDnaBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const boostDnaSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  boostDnaCategory.addProduct(boostDna);
  boostDnaBrand.addProduct(boostDna);
  boostDna.addSize(boostDnaSize);

  // ============================================================ //
  const boostOg = await Product.create({
    name: "Adidas Ultra Boost OG Beyonce Ivy Park Hi Res Yellow",
    image: "",
    description: "",
    price: 185.2,
    status: "disponible",
  });

  const boostOgCategory = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const boostOgBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const boostOgSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  boostOgCategory.addProduct(boostOg);
  boostOgBrand.addProduct(boostOg);
  boostOg.addSize(boostOgSize);

  // ============================================================ //
  const x9000l3 = await Product.create({
    name: "Adidas X9000L3 ",
    image: "",
    description: "",
    price: 145.15,
    status: "disponible",
  });

  const x9000l3Category = await Category.findOne({
    where: {
      id: 2,
    },
    attributes: ["id"],
  });

  const x9000l3Brand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const x9000l3Size = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  x9000l3Category.addProduct(x9000l3);
  x9000l3Brand.addProduct(x9000l3);
  x9000l3.addSize(x9000l3Size);

  // -------------------------Deportivo--------------------------- //

  // -------------------------Urbano--------------------------- //

  const yungOne = await Product.create({
    name: "Adidas Yung-1 Cloud White",
    image: "",
    description: "",
    price: 195.35,
    status: "disponible",
  });

  const yungOneCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const yungOneBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const yungOneSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  yungOneCategory.addProduct(yungOne);
  yungOneBrand.addProduct(yungOne);
  yungOne.addSize(yungOneSize);

  // ============================================================ //

  const superStar = await Product.create({
    name: "Adidas Superstar",
    image: "",
    description: "",
    price: 126.15,
    status: "disponible",
  });

  const superStarCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const superStarBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const superStarSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  superStarCategory.addProduct(superStar);
  superStarBrand.addProduct(superStar);
  superStar.addSize(superStarSize);

  // ============================================================ //

  const vulc = await Product.create({
    name: "Adidas 3MC Vulc",
    image: "",
    description: "",
    price: 115.35,
    status: "disponible",
  });

  const vulcCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const vulcBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const vulcSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  vulcCategory.addProduct(vulc);
  vulcBrand.addProduct(vulc);
  vulc.addSize(vulcSize);

  // ============================================================ //

  const advantage = await Product.create({
    name: "Adidas Advantage Base",
    image: "",
    description: "",
    price: 95.65,
    status: "disponible",
  });

  const advantageCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const advantageBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const advantageSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  advantageCategory.addProduct(advantage);
  advantageBrand.addProduct(advantage);
  advantage.addSize(advantageSize);

  // ============================================================ //

  const nite = await Product.create({
    name: "Adidas Nite Jogger",
    image: "",
    description: "",
    price: 105.65,
    status: "disponible",
  });

  const niteCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const niteBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const niteSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  niteCategory.addProduct(nite);
  niteBrand.addProduct(nite);
  nite.addSize(niteSize);

  // ============================================================ //

  const ozweego = await Product.create({
    name: "Adidas OZWEEGO Celox",
    image: "",
    description: "",
    price: 105.65,
    status: "disponible",
  });

  const ozweegoCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const ozweegoBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const ozweegoSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  ozweegoCategory.addProduct(ozweego);
  ozweegoBrand.addProduct(ozweego);
  ozweego.addSize(ozweegoSize);

  // ============================================================ //

  const gazelle = await Product.create({
    name: "Adidas Gazelle",
    image: "",
    description: "",
    price: 105.65,
    status: "disponible",
  });

  const gazelleCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const gazelleBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const gazelleSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  gazelleCategory.addProduct(gazelle);
  gazelleBrand.addProduct(gazelle);
  gazelle.addSize(gazelleSize);

  // ============================================================ //

  const crazychaos = await Product.create({
    name: "Adidas CRAZYCHAOS SHADOW 2.0",
    image: "",
    description: "",
    price: 105.65,
    status: "disponible",
  });

  const crazychaosCategory = await Category.findOne({
    where: {
      id: 1,
    },
    attributes: ["id"],
  });

  const crazychaosBrand = await Brand.findOne({
    where: {
      id: 4,
    },
    attributes: ["id"],
  });

  const crazychaosSize = await Size.findAll({
    where: {
      id: [5, 6, 7, 8, 9],
    },
  });

  crazychaosCategory.addProduct(crazychaos);
  crazychaosBrand.addProduct(crazychaos);
  crazychaos.addSize(crazychaosSize);

  // -------------------------Urbano--------------------------- //
};
module.exports = { adidasMockUp };
