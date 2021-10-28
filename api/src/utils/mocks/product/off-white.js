const { Brand, Category, Product, Size } = require("../../../db.js");

const offWhiteMockUp = async () => {
    const vulcLow = await Product.create({
        name: "OFF-WHITE Vulc Low",
        image: "",
        description: "",
        price: 305.25,
        status: "disponible",
    });

    const vulcLowCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const vulcLowBrand = await Brand.findOne({
        where: {
            id: 3,
        },
        attributes: ['id']
    });

    const vulcLowSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    vulcLowBrand.addProduct(vulcLow);
    vulcLowCategory.addProduct(vulcLow);
    vulcLow.addSizes(vulcLowSizes);

    // ============================================================ //

    const ecoCanvas = await Product.create({
        name: "OFF-WHITE Vulc Low Eco Canvas",
        image: "",
        description: "",
        price: 315.25,
        status: "disponible" ,
    });

    const ecoCanvasCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const ecoCanvasBrand = await Brand.findOne({
        where: {
            id: 3,
        },
        attributes: ['id']
    });

    const ecoCanvasSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    ecoCanvasBrand.addProduct(ecoCanvas);
    ecoCanvasCategory.addProduct(ecoCanvas);
    ecoCanvas.addSizes(ecoCanvasSizes);


    // ============================================================ //

    const lowVulc = await Product.create({
        name: "Off-White Low Vulc",
        image: "",
        description: "",
        price: 335.35,
        status: "disponible" ,
    });

    const lowVulcCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const lowVulcBrand = await Brand.findOne({
        where: {
            id: 3,
        },
        attributes: ['id']
    });

    const lowVulcSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    lowVulcBrand.addProduct(lowVulc);
    lowVulcCategory.addProduct(lowVulc);
    lowVulc.addSizes(lowVulcSizes);


    // ============================================================ //

    const manLogo = await Product.create({
        name: "OFF-WHITE Drowning Man Logo Slides",
        image: "",
        description: "",
        price: 255.25,
        status: "disponible" ,
    });

    const manLogoCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const manLogoBrand = await Brand.findOne({
        where: {
            id: 3,
        },
        attributes: ['id']
    });

    const manLogoSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    manLogoBrand.addProduct(manLogo);
    manLogoCategory.addProduct(manLogo);
    manLogo.addSizes(manLogoSizes);


    //-------------------stret wear -------------------//

};

module.exports = { offWhiteMockUp };
