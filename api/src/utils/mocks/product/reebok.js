const { Brand, Category, Product, Size } = require("../../../db.js");

const reebokMockUp = async () => {
    const nano = await Product.create({
        name: "Reebok Nano X1",
        image: "",
        description: "",
        price: 125.25,
        status: "disponible",
    });

    const nanoCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const nanoBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const nanoSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    nanoBrand.addProduct(nano);
    nanoCategory.addProduct(nano);
    nano.addSizes(nanoSizes);

    // ============================================================ //

    const adventure = await Product.create({
        name: "Reebok  Nano X1 Adventure",
        image: "",
        description: "",
        price: 85.25,
        status: "disponible" ,
    });

    const adventureCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const adventureBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const adventureSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    adventureBrand.addProduct(adventure);
    adventureCategory.addProduct(adventure);
    adventure.addSizes(adventureSizes);


    // ============================================================ //

    const rangers = await Product.create({
        name: "Reebok Nano X1 Power Rangers",
        image: "",
        description: "",
        price: 185.35,
        status: "disponible" ,
    });

    const rangersCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const rangersBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const rangersSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    rangersBrand.addProduct(rangers);
    rangersCategory.addProduct(rangers);
    rangers.addSizes(rangersSizes);


    // ============================================================ //

    const vegan = await Product.create({
        name: "Reebok Nano X1 VEGAN",
        image: "",
        description: "",
        price: 155.25,
        status: "disponible" ,
    });

    const veganCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const veganBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const veganSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    veganBrand.addProduct(vegan);
    veganCategory.addProduct(vegan);
    vegan.addSizes(veganSizes);

    // ============================================================ //
    const flexagon = await Product.create({
        name: "Reebok Flexagon Energy TR 3",
        image: "",
        description: "",
        price: 195.25,
        status: "disponible" ,
    });

    const flexagonCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const flexagonBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const flexagonSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    flexagonBrand.addProduct(flexagon);
    flexagonCategory.addProduct(flexagon);
    flexagon.addSizes(flexagonSizes);

    // ============================================================ //

    const flashfilm = await Product.create({
        name: "Reebok  Flashfilm Train 2",
        image: "",
        description: "",
        price: 225.00,
        status: "disponible" ,
    });

    const flashfilmCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const flashfilmBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const flashfilmSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    flashfilmBrand.addProduct(flashfilm);
    flashfilmCategory.addProduct(flashfilm);
    flashfilm.addSizes(flashfilmSizes);

    // ============================================================ //

    const womanNano = await Product.create({
        name: "Reebok Wonder Woman Nano X",
        image: "",
        description: "",
        price: 150.00,
        status: "disponible" ,
    });

    const womanNanoCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const womanNanoBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const womanNanoSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    womanNanoBrand.addProduct(womanNano);
    womanNanoCategory.addProduct(womanNano);
    womanNano.addSizes(womanNanoSizes);

    // ============================================================ //

    const hiit = await Product.create({
        name: "Reebok HIIT",
        image: "",
        description: "",
        price: 170.00,
        status: "disponible" ,
    });

    const hiitCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const hiitBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const hiitSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    hiitBrand.addProduct(hiit);
    hiitCategory.addProduct(hiit);
    hiit.addSizes(hiitSizes);
    // ============================================================ //

    const trainer = await Product.create({
        name: "Reebok Advanced Trainer",
        image: "",
        description: "",
        price: 155.00,
        status: "disponible" ,
    });

    const trainerCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const trainerBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const trainerSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    trainerBrand.addProduct(trainer);
    trainerCategory.addProduct(trainer);
    trainer.addSizes(trainerSizes);
    // ============================================================ //

    const essential = await Product.create({
        name: "Reebok Reago Essential 2 Reebok",
        image: "",
        description: "",
        price: 200.00,
        status: "disponible" ,
    });

    const essentialCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const essentialBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const essentialSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    essentialBrand.addProduct(essential);
    essentialCategory.addProduct(essential);
    essential.addSizes(essentialSizes);

    // ============================================================ //

    const ztaur = await Product.create({
        name: "Reebok Ztaur Run",
        image: "",
        description: "",
        price: 180.00,
        status: "disponible" ,
    });

    const ztaurCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const ztaurBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const ztaurSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    ztaurBrand.addProduct(ztaur);
    ztaurCategory.addProduct(ztaur);
    ztaur.addSizes(ztaurSizes);

    // ============================================================ //

    const zig = await Product.create({
        name: "Reebok Zig Dynamica",
        image: "",
        description: "",
        price: 190.00,
        status: "disponible" ,
    });

    const zigCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const zigBrand = await Brand.findOne({
        where: {
            id: 6,
        },
        attributes: ['id']
    });

    const zigSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    zigBrand.addProduct(zig);
    zigCategory.addProduct(zig);
    zig.addSizes(zigSizes);


    //-------------------stret wear -------------------//

};

module.exports = { reebokMockUp };
