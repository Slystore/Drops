const { Brand, Category, Product, Size } = require("../../../db.js");

const nikeMockUp = async () => {
    const airForceOneFelt = await Product.create({
        name: "AIR FORCE 1 FELT GS",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible",
    });

    const airForceOneFeltCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airForceOneFeltBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airForceOneSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airForceOneFeltBrand.addProduct(airForceOneFelt);
    airForceOneFeltCategory.addProduct(airForceOneFelt);
    airForceOneFelt.addSizes(airForceOneSizes);

    // ============================================================ //

    const airForce1Goretex = await Product.create({
        name: "Air Force 1 Goretex High White DS",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const airForce1GoretexCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airForce1GoretexBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airForce1GoretexSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airForce1GoretexBrand.addProduct(airForce1Goretex);
    airForce1GoretexCategory.addProduct(airForce1Goretex);
    airForce1Goretex.addSizes(airForce1GoretexSizes);


    // ============================================================ //

    const airMax720Orange = await Product.create({
        name: "Air Max 720 Orange DS",
        image: "",
        description: "",
        price: 105.35,
        status: "disponible" ,
    });

    const airMax720OrangeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax720OrangeBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax720OrangeSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airMax720OrangeBrand.addProduct(airMax720Orange);
    airMax720OrangeCategory.addProduct(airMax720Orange);
    airMax720Orange.addSizes(airMax720OrangeSizes);


    // ============================================================ //

    const airMax720OG = await Product.create({
        name: "Air Max 720 OG DS",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const airMax720OGCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax720OGBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax720OGSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airMax720OGBrand.addProduct(airMax720OG);
    airMax720OGCategory.addProduct(airMax720OG);
    airMax720OG.addSizes(airMax720OGSizes);

    // ============================================================ //

    const airMax1Terra = await Product.create({
        name: "Air Max 1 Terra",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const airMax1TerraCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax1TerraBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax1TerraSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airMax1TerraBrand.addProduct(airMax1Terra);
    airMax1TerraCategory.addProduct(airMax1Terra);
    airMax1Terra.addSizes(airMax1TerraSizes);

    // ============================================================ //

    const airMax1Parra = await Product.create({
        name: "Air Max 1 Parra DS",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const airMax1ParraCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax1ParraBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airMax1ParraSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airMax1ParraBrand.addProduct(airMax1Parra);
    airMax1ParraCategory.addProduct(airMax1Parra);
    airMax1Parra.addSizes(airMax1ParraSizes);

    //-------------------stret wear -------------------//





    //-------------------deportivo -------------------//

    const nikeRunFlyknit = await Product.create({
        name: "Nike React Infinity Run Flyknit",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeRunFlyknitCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeRunFlyknitBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeRunFlyknitSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nikeRunFlyknitBrand.addProduct(nikeRunFlyknit);
    nikeRunFlyknitCategory.addProduct(nikeRunFlyknit);
    nikeRunFlyknit.addSizes(nikeRunFlyknitSizes);

    // ============================================================ //

    const nikeWinflo = await Product.create({
        name: "Nike Winflo 8",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeWinfloCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeWinfloBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeWinfloSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nikeWinfloBrand.addProduct(nikeWinflo);
    nikeWinfloCategory.addProduct(nikeWinflo);
    nikeWinflo.addSizes(nikeWinfloSizes);
    // ============================================================ //

    const nikeRevolution = await Product.create({
        name: "Nike Revolution 5",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeRevolutionCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeRevolutionBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeRevolutionSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });

    nikeRevolutionBrand.addProduct(nikeRevolution);
    nikeRevolutionCategory.addProduct(nikeRevolution);
    nikeRevolution.addSizes(nikeRevolutionSizes);
   
    // ============================================================ //

    const nikeDrownshifter = await Product.create({
        name: "Nike Downshifter 11",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeDrownshifterCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeDrownshifterBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeDrownshifterSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nikeDrownshifterBrand.addProduct(nikeDrownshifter);
    nikeDrownshifterCategory.addProduct(nikeDrownshifter);
    nikeDrownshifter.addSizes(nikeDrownshifterSizes);

    // ============================================================ //

    const nikeAirExcee = await Product.create({
        name: "Nike Air Max Excee",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeAirExceeCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeAirExceeBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeAirExceeSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nikeAirExceeBrand.addProduct(nikeAirExcee);
    nikeAirExceeCategory.addProduct(nikeAirExcee);
    nikeAirExcee.addSizes(nikeAirExceeSizes);

    // ============================================================ //

    const nikeQuest = await Product.create({
        name: "Nike Quest 4",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });

    const nikeQuestCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nikeQuestBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const nikeQuestSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nikeQuestBrand.addProduct(nikeQuest);
    nikeQuestCategory.addProduct(nikeQuest);
    nikeQuest.addSizes(nikeQuestSizes);
    //-------------------deportivo -------------------//
};

module.exports = { nikeMockUp };
