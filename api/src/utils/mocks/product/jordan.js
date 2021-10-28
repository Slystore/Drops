const { Brand, Category, Product, Size } = require("../../../db.js");

const jordanMockUp = async () => {
    const jordanOne = await Product.create({
        name: "Air Jordan 1 High Royal Toe",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanOneCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanOneBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanOneSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanOneBrand.addProduct(jordanOne);
    jordanOneCategory.addProduct(jordanOne);
    jordanOne.addSizes(jordanOneSizes);

    // ============================================================ //

    const jordanRetro = await Product.create({
        name: "Jordan 1 Retro High Dark Mocha",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanRetroCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanRetroBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanRetroSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanRetroBrand.addProduct(jordanRetro);
    jordanRetroCategory.addProduct(jordanRetro);
    jordanRetro.addSizes(jordanRetroSizes);

    // ============================================================ //

    const jordanCactus = await Product.create({
        name: "Air Jordan 4 Cactus Jack",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanCactusCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanCactusBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanCactusSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanCactusBrand.addProduct(jordanCactus);
    jordanCactusCategory.addProduct(jordanCactus);
    jordanCactus.addSizes(jordanCactusSizes);

    // ============================================================ //

    const jordanHyper = await Product.create({
        name: "Jordan 1 Retro High Hyper Royal Smoke Grey",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanHyperCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanHyperBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanHyperSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanHyperBrand.addProduct(jordanHyper);
    jordanHyperCategory.addProduct(jordanHyper);
    jordanHyper.addSizes(jordanHyperSizes);

    // ============================================================ //

    const jordanJbalvin = await Product.create({
        name: "Jordan 1 Retro High J Balvin",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanJbalvinCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanJbalvinBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanJbalvinSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanJbalvinBrand.addProduct(jordanJbalvin);
    jordanJbalvinCategory.addProduct(jordanJbalvin);
    jordanJbalvin.addSizes(jordanJbalvinSizes);
    // ============================================================ //

    const jordanMocha = await Product.create({
        name: "Jordan 1 Retro High Dark Mocha",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const jordanMochaCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordanMochaBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordanMochaSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordanMochaBrand.addProduct(jordanMocha);
    jordanMochaCategory.addProduct(jordanMocha);
    jordanMocha.addSizes(jordanMochaSizes);

    // ============================================================ //

    const Jordan11RetroPlayOffsBred = await Product.create({
        name: "Jordan 11 Retro Playoffs Bred 2019",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const Jordan11RetroPlayOffsBredCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const Jordan11RetroPlayOffsBredBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const Jordan11RetroPlayOffsBredSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    Jordan11RetroPlayOffsBredBrand.addProduct(Jordan11RetroPlayOffsBred);
    Jordan11RetroPlayOffsBredCategory.addProduct(Jordan11RetroPlayOffsBred);
    Jordan11RetroPlayOffsBred.addSizes(Jordan11RetroPlayOffsBredSizes);

    // ============================================================ //

    const jordan4RetroLight = await Product.create({
        name: "Jordan 4 Retro Lightning 2021",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });
    const jordan4RetroLightCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const jordan4RetroLightBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const jordan4RetroLightSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    jordan4RetroLightBrand.addProduct(jordan4RetroLight);
    jordan4RetroLightCategory.addProduct(jordan4RetroLight);
    jordan4RetroLight.addSizes(jordan4RetroLightSizes);

    // ============================================================ //

    const Jordan4RetroBred = await Product.create({
        name: "Jordan 4 Retro Bred 2019",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const Jordan4RetroBredCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const Jordan4RetroBredBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const Jordan4RetroBredSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    Jordan4RetroBredBrand.addProduct(Jordan4RetroBred);
    Jordan4RetroBredCategory.addProduct(Jordan4RetroBred);
    Jordan4RetroBred.addSizes(Jordan4RetroBredSizes);

    // ============================================================ //

    const Jordan3UNC = await Product.create({
        name: "Jordan 3 UNC",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const Jordan3UNCCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const Jordan3UNCBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const Jordan3UNCSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    Jordan3UNCBrand.addProduct(Jordan3UNC);
    Jordan3UNCCategory.addProduct(Jordan3UNC);
    Jordan3UNC.addSizes(Jordan3UNCSizes);

    // ============================================================ //

    const airJordan1MidMilitary = await Product.create({
        name: "Air Jordan 1 Mid Military Olive",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const airJordan1MidMilitaryCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airJordan1MidMilitaryBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const airJordan1MidMilitarySizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airJordan1MidMilitaryBrand.addProduct(airJordan1MidMilitary);
    airJordan1MidMilitaryCategory.addProduct(airJordan1MidMilitary);
    airJordan1MidMilitary.addSizes(airJordan1MidMilitarySizes);

    // ============================================================ //

    const airJordan1MidPurple = await Product.create({
        name: "Air Jordan 1 Mid SE Purple",
        image: "",
        description: "",
        price: 800,
        status: "disponible",
    });

    const airJordan1MidPurpleCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const airJordan1MidPurpleBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const airJordan1MidPurpleSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    airJordan1MidPurpleBrand.addProduct(airJordan1MidPurple);
    airJordan1MidPurpleCategory.addProduct(airJordan1MidPurple);
    airJordan1MidPurple.addSizes(airJordan1MidPurpleSizes);

    //-------------------stret wear -------------------//
};

module.exports = { jordanMockUp };
