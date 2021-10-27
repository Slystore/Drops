const { Brand, Category, Product } = require("../../../db.js");

const nikeMockUp = async () => {
    const airForce1Felt = await Product.create({
        name: "AIR FORCE 1 FELT GS",
        image: "",
        description: "",
        price: 105.25,
        status: ["disponible", "no disponible"],
    });

    const airForce1FeltCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airForce1FeltBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airForce1Felt.addCategory(airForce1FeltCategory);
    airForce1Felt.addBrand(airForce1FeltBrand);

    // ============================================================ //

    const airForce1Goretex = await Product.create({
        name: "Air Force 1 Goretex High White DS",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const airForce1GoretexCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airForce1GoretexBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airForce1Goretex.addCategory(airForce1GoretexCategory);
    airForce1Goretex.addBrand(airForce1GoretexBrand);

    // ============================================================ //

    const airMax720Orange = await Product.create({
        name: "Air Max 720 Orange DS",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const airMax720OrangeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airMax720OrangeBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airMax720Orange.addCategory(airMax720OrangeCategory);
    airMax720Orange.addBrand(airMax720OrangeBrand);

    // ============================================================ //

    const airMax720OG = await Product.create({
        name: "Air Max 720 OG DS",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const airMax720OGCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airMax720OGBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airMax720OG.addCategory(airMax720OGCategory);
    airMax720OG.addBrand(airMax720OGBrand);

    // ============================================================ //

    const airMax1Terra = await Product.create({
        name: "Air Max 1 Terra",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const airMax1TerraCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airMax1TerraBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airMax1Terra.addCategory(airMax1TerraCategory);
    airMax1Terra.addBrand(airMax1TerraBrand);

    // ============================================================ //

    const airMax1Parra = await Product.create({
        name: "Air Max 1 Parra DS",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const airMax1ParraCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airMax1ParraBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    airMax1Parra.addCategory(airMax1ParraCategory);
    airMax1Parra.addBrand(airMax1ParraBrand);

    //-------------------stret wear -------------------//





    //-------------------deportivo -------------------//

    const nikeRunFlyknit = await Product.create({
        name: "Nike React Infinity Run Flyknit",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });
    const runFlyknitCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const runFlyknitBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeRunFlyknit.addCategory(runFlyknitCategory);
    nikeRunFlyknit.addBrand(runFlyknitBrand);

    // ============================================================ //

    const nikeWinflo = await Product.create({
        name: "Nike Winflo 8",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const nikeWinfloCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const nikeWinfloBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeWinflo.addCategory(nikeWinfloCategory);
    nikeWinflo.addBrand(nikeWinfloBrand);

    // ============================================================ //

    const nikeRevolution = await Product.create({
        name: "Nike Revolution 5",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const nikeRevolutionCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const nikeRevolutionBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeRevolution.addCategory(nikeRevolutionCategory);
    nikeRevolution.addBrand(nikeRevolutionBrand);

    // ============================================================ //

    const nikeDrownshifter = await Product.create({
        name: "Nike Downshifter 11",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const nikeDrownshifterCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const nikeDrownshifterBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeDrownshifter.addCategory(nikeDrownshifterCategory);
    nikeDrownshifter.addBrand(nikeDrownshifterBrand);

    // ============================================================ //

    const nikeAirExcee = await Product.create({
        name: "Nike Air Max Excee",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const nikeAirExceeCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const nikeAirExceeBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeAirExcee.addCategory(nikeAirExceeCategory);
    nikeAirExcee.addBrand(nikeAirExceeBrand);

    // ============================================================ //

    const nikeQuest = await Product.create({
        name: "Nike Quest 4",
        image: "",
        description: "",
        price: "$105",
        status: ["disponible", "no disponible"],
    });

    const nikeQuestCategory = await Category.findAll({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const nikeQuestBrand = await Brand.findAll({
        where: {
            id: 1,
        },
        attributes: [id],
    });

    nikeQuestBrand.addCategory(nikeQuestCategory);
    nikeQuest.addBrand(nikeQuestBrand);
    //-------------------deportivo -------------------//
};

module.exports = { nikeMockUp };
