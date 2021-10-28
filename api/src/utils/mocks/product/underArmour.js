const { Brand, Category, Product, Size } = require("../../../db.js");

const underArmourMockUp = async () => {
    const surge2 = await Product.create({
        name: "UNDER ARMOUR UA W SURGE 2",
        image: "",
        description: "",
        price: 200.00,
        status: "disponible",
    });

    const surge2Category = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const surge2Brand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const surge2Sizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    surge2Brand.addProduct(surge2);
    surge2Category.addProduct(surge2);
    surge2.addSizes(surge2Sizes);

    // ============================================================ //

    const bandit = await Product.create({
        name: "UNDER ARMOUR CHARGED BANDIT 6 LAM",
        image: "",
        description: "",
        price: 280.00,
        status: "disponible" ,
    });

    const banditCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const banditBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const banditSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    banditBrand.addProduct(bandit);
    banditCategory.addProduct(bandit);
    bandit.addSizes(banditSizes);


    // ============================================================ //

    const pursuit = await Product.create({
        name: "UNDER ARMOUR CHARGED PURSUIT 2 LAM",
        image: "",
        description: "",
        price: 215.35,
        status: "disponible" ,
    });

    const pursuitCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const pursuitBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const pursuitSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    pursuitBrand.addProduct(pursuit);
    pursuitCategory.addProduct(pursuit);
    pursuit.addSizes(pursuitSizes);


    // ============================================================ //

    const chargetEssential = await Product.create({
        name: "UNDER ARMOUR CHARGED ESSENTIAL",
        image: "",
        description: "",
        price: 255.85,
        status: "disponible" ,
    });

    const chargetEssentialCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const chargetEssentialBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const chargetEssentialSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    chargetEssentialBrand.addProduct(chargetEssential);
    chargetEssentialCategory.addProduct(chargetEssential);
    chargetEssential.addSizes(chargetEssentialSizes);

    // ============================================================ //
    const sonic = await Product.create({
        name: "UNDER ARMOUR SONIC 3",
        image: "",
        description: "",
        price: 295.00,
        status: "disponible" ,
    });

    const sonicCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const sonicBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const sonicSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    sonicBrand.addProduct(sonic);
    sonicCategory.addProduct(sonic);
    sonic.addSizes(sonicSizes);

    // ============================================================ //

    const chargetNew = await Product.create({
        name: "UNDER ARMOUR CHARGED ESSENTIAL",
        image: "",
        description: "",
        price: 285.00,
        status: "disponible" ,
    });

    const chargetNewCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const chargetNewBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const chargetNewSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    chargetNewBrand.addProduct(chargetNew);
    chargetNewCategory.addProduct(chargetNew);
    chargetNew.addSizes(chargetNewSizes);

    // ============================================================ //

    const sourPatch = await Product.create({
        name: "Under Armour Curry 7 Sour Patch Kids Peach",
        image: "",
        description: "",
        price: 250.00,
        status: "disponible" ,
    });

    const sourPatchCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const sourPatchBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const sourPatchSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    sourPatchBrand.addProduct(sourPatch);
    sourPatchCategory.addProduct(sourPatch);
    sourPatch.addSizes(sourPatchSizes);

    // ============================================================ //

    const rockBlack = await Product.create({
        name: "Under Armour Project Rock 2 Black White",
        image: "",
        description: "",
        price: 270.00,
        status: "disponible" ,
    });

    const rockBlackCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const rockBlackBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const rockBlackSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    rockBlackBrand.addProduct(rockBlack);
    rockBlackCategory.addProduct(rockBlack);
    rockBlack.addSizes(rockBlackSizes);
    // ============================================================ //

    const rockDelta = await Product.create({
        name: "Under Armour The Rock Delta Steeltown Gold",
        image: "",
        description: "",
        price: 255.00,
        status: "disponible" ,
    });

    const rockDeltaCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const rockDeltaBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const rockDeltaSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    rockDeltaBrand.addProduct(rockDelta);
    rockDeltaCategory.addProduct(rockDelta);
    rockDelta.addSizes(rockDeltaSizes);
    // ============================================================ //

    const mirage = await Product.create({
        name: "Under Armour Mirage 3.0 Black/Black-Black",
        image: "",
        description: "",
        price: 200.00,
        status: "disponible" ,
    });

    const mirageCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const mirageBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const mirageSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    mirageBrand.addProduct(mirage);
    mirageCategory.addProduct(mirage);
    mirage.addSizes(mirageSizes);

    // ============================================================ //

    const curry = await Product.create({
        name: "Under Armour Curry 6 Dub Nation",
        image: "",
        description: "",
        price: 380.00,
        status: "disponible" ,
    });

    const curryCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const curryBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const currySizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    curryBrand.addProduct(curry);
    curryCategory.addProduct(curry);
    curry.addSizes(currySizes);

    // ============================================================ //

    const luxRed = await Product.create({
        name: "UA Curry 1 Lux Red",
        image: "",
        description: "",
        price: 300.00,
        status: "disponible" ,
    });

    const luxRedCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const luxRedBrand = await Brand.findOne({
        where: {
            id: 9,
        },
        attributes: ['id']
    });

    const luxRedSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    luxRedBrand.addProduct(luxRed);
    luxRedCategory.addProduct(luxRed);
    luxRed.addSizes(luxRedSizes);


    //-------------------stret wear -------------------//

};

module.exports = { underArmourMockUp };
