const { Brand, Category, Product, Size } = require("../../../db.js");

const vansMockUp = async () => {
    const skool = await Product.create({
        name: "Vans Old Skool Black White",
        image: "",
        description: "",
        price: 100.00,
        status: "disponible",
    });

    const skoolCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const skoolBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const skoolSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    skoolBrand.addProduct(skool);
    skoolCategory.addProduct(skool);
    skool.addSizes(skoolSizes);

    // ============================================================ //

    const horror = await Product.create({
        name: "Vans Era Horror Pack It Pennywise",
        image: "",
        description: "",
        price: 80.00,
        status: "disponible" ,
    });

    const horrorCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const horrorBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const horrorSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    horrorBrand.addProduct(horror);
    horrorCategory.addProduct(horror);
    horror.addSizes(horrorSizes);


    // ============================================================ //

    const brown = await Product.create({
        name: "Vans Vault Sk8-Mid LX JJJJound Brown",
        image: "",
        description: "",
        price: 115.35,
        status: "disponible" ,
    });

    const brownCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const brownBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const brownSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    brownBrand.addProduct(brown);
    brownCategory.addProduct(brown);
    brown.addSizes(brownSizes);


    // ============================================================ //

    const sk8 = await Product.create({
        name: "Vans Sk8-Hi Black White",
        image: "",
        description: "",
        price: 100.85,
        status: "disponible" ,
    });

    const sk8Category = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const sk8Brand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const sk8Sizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    sk8Brand.addProduct(sk8);
    sk8Category.addProduct(sk8);
    sk8.addSizes(sk8Sizes);

    // ============================================================ //
    const classic = await Product.create({
        name: "Vans Classic Slip-On Horror Pack The Shining",
        image: "",
        description: "",
        price: 95.00,
        status: "disponible" ,
    });

    const classicCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const classicBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const classicSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    classicBrand.addProduct(classic);
    classicCategory.addProduct(classic);
    classic.addSizes(classicSizes);

    // ============================================================ //

    const oldSkool = await Product.create({
        name: "Vans Old Skool Notre Off-White",
        image: "",
        description: "",
        price: 85.00,
        status: "disponible" ,
    });

    const oldSkoolCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const oldSkoolBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const oldSkoolSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    oldSkoolBrand.addProduct(oldSkool);
    oldSkoolCategory.addProduct(oldSkool);
    oldSkool.addSizes(oldSkoolSizes);

    // ============================================================ //

    const lampin = await Product.create({
        name: "Vans Lampin Comme des Garcons",
        image: "",
        description: "",
        price: 150.00,
        status: "disponible" ,
    });

    const lampinCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const lampinBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const lampinSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    lampinBrand.addProduct(lampin);
    lampinCategory.addProduct(lampin);
    lampin.addSizes(lampinSizes);

    // ============================================================ //

    const yacht = await Product.create({
        name: "Vans Old Skool Yacht Club",
        image: "",
        description: "",
        price: 70.00,
        status: "disponible" ,
    });

    const yachtCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const yachtBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const yachtSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    yachtBrand.addProduct(yacht);
    yachtCategory.addProduct(yacht);
    yacht.addSizes(yachtSizes);
    // ============================================================ //

    const bonesBlack = await Product.create({
        name: "Vans Era WTAPS Bones Black",
        image: "",
        description: "",
        price: 95.00,
        status: "disponible" ,
    });

    const bonesBlackCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const bonesBlackBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const bonesBlackSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    bonesBlackBrand.addProduct(bonesBlack);
    bonesBlackCategory.addProduct(bonesBlack);
    bonesBlack.addSizes(bonesBlackSizes);
    // ============================================================ //

    const moma = await Product.create({
        name: "Vans Old Skool MoMA Salvador Dali",
        image: "",
        description: "",
        price: 100.00,
        status: "disponible" ,
    });

    const momaCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const momaBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const momaSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    momaBrand.addProduct(moma);
    momaCategory.addProduct(moma);
    moma.addSizes(momaSizes);

    // ============================================================ //

    const pacSun = await Product.create({
        name: "Vans Old Skool Pac Sun ASAP Rocky Black",
        image: "",
        description: "",
        price: 110.00,
        status: "disponible" ,
    });

    const pacSunCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const pacSunBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const pacSunSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    pacSunBrand.addProduct(pacSun);
    pacSunCategory.addProduct(pacSun);
    pacSun.addSizes(pacSunSizes);

    // ============================================================ //

    const simpsons = await Product.create({
        name: "Vans Sk8-Hi The Simpsons Lisa",
        image: "",
        description: "",
        price: 90.00,
        status: "disponible" ,
    });

    const simpsonsCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const simpsonsBrand = await Brand.findOne({
        where: {
            id: 10,
        },
        attributes: ['id']
    });

    const simpsonsSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    simpsonsBrand.addProduct(simpsons);
    simpsonsCategory.addProduct(simpsons);
    simpsons.addSizes(simpsonsSizes);


    //-------------------stret wear -------------------//

};

module.exports = { vansMockUp };
