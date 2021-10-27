const { Brand, Category, Product, Size } = require("../../../db.js");

const jordanMockUp = async () => {
    const jordanOne = await Product.create({
        name: "Air Jordan 1 High Royal Toe",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanOneCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanOneBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const jordanOneSize = await Size.findAll({
        where: {
            id: [38, 39, 40, 41, 42, 43 ]
        }
    })

    jordanOne.addCategories(jordanOneCategory);
    jordanOne.addBrand(jordanOneBrand);
    jordanOne.addSize(jordanOneSize);

    // ============================================================ //

    const jordanRetro = await Product.create({
        name: "Jordan 1 Retro High Dark Mocha",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanRetroCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanRetroBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordanRetro.addCategories(jordanRetroCategory);
    jordanRetro.addBrand(jordanRetroBrand);

    // ============================================================ //

    const jordanCactus = await Product.create({
        name: "Air Jordan 4 Cactus Jack",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanCactusCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanCactusBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordanCactus.addBrand(jordanCactusCategory)
    jordanCactus.addBrand(jordanCactusBrand)

    // ============================================================ //

    const jordanHyper = await Product.create({
        name: "Jordan 1 Retro High Hyper Royal Smoke Grey",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanHyperCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanHyperBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordanCactusBrand.addCategories(jordanHyperCategory)
    jordanHyper.addBrand(jordanHyperBrand)

    // ============================================================ //

    const jordanJbalvin = await Product.create({
        name: "Jordan 1 Retro High J Balvin",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanJbalvinCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanJbalvinBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordanJbalvin.addCategories(jordanJbalvinCategory)
    jordanJbalvin.addBrand(jordanJbalvinBrand)

    // ============================================================ //

    const jordanMocha = await Product.create({
        name: "Jordan 1 Retro High Dark Mocha",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const jordanMochaCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordanMochaBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordanMocha.addCategories(jordanMochaCategory);
    jordanMocha.addBrand(jordanMochaBrand);

    // ============================================================ //

    const Jordan11RetroPlayOffsBred = await Product.create({
        name: "Jordan 11 Retro Playoffs Bred 2019",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const Jordan11RetroPlayOffsBredCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const Jordan11RetroPlayOffsBredBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    Jordan11RetroPlayOffsBred.addCategories(Jordan11RetroPlayOffsBredCategory);
    Jordan11RetroPlayOffsBred.addBrand(Jordan11RetroPlayOffsBredBrand);

    // ============================================================ //

    const jordan4RetroLight = await Product.create({
        name: "Jordan 4 Retro Lightning 2021",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });
    const jordan4RetroLightCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const jordan4RetroLightBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    jordan4RetroLight.addCategories(jordan4RetroLightCategory);
    jordan4RetroLight.addBrand(jordan4RetroLightBrand);

    // ============================================================ //

    const Jordan4RetroBred = await Product.create({
        name: "Jordan 4 Retro Bred 2019",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const Jordan4RetroBredCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const Jordan4RetroBredBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    Jordan4RetroBred.addCategories(Jordan4RetroBredCategory);
    Jordan4RetroBred.addBrand(Jordan4RetroBredBrand);

    // ============================================================ //

    const Jordan3UNC = await Product.create({
        name: "Jordan 3 UNC",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const Jordan3UNCCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const Jordan3UNCBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    Jordan3UNC.addCategories(Jordan3UNCCategory);
    Jordan3UNC.addBrand(Jordan3UNCBrand);

    // ============================================================ //

    const airJordan1MidMilitary = await Product.create({
        name: "Air Jordan 1 Mid Military Olive",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const airJordan1MidMilitaryCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airJordan1MidMilitaryBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    airJordan1MidMilitary.addCategories(airJordan1MidMilitaryCategory);
    airJordan1MidMilitary.addBrand(airJordan1MidMilitaryBrand);

    // ============================================================ //

    const airJordan1MidPurple = await Product.create({
        name: "Air Jordan 1 Mid SE Purple",
        image: "",
        description: "",
        price: "$105",
        status: "disponible",
    });

    const airJordan1MidPurpleCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airJordan1MidPurpleBrand = await Brand.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    airJordan1MidPurple.addCategories(airJordan1MidPurpleCategory);
    airJordan1MidPurple.addBrand(airJordan1MidPurpleBrand);

    //-------------------stret wear -------------------//
};

module.exports = { jordanMockUp };
