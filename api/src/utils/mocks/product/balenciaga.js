const { Brand, Category, Product, Size } = require("../../../db.js");

const balenciagaMockUp = async () => {
    const balSpeed2Black = await Product.create({
        name: "Balenciaga Speed 2.0 Black",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible",
    });

    const balSpeed2BlackCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balSpeed2BlackBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balSpeed2BlackSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balSpeed2BlackBrand.addProduct(balSpeed2Black);
    balSpeed2BlackCategory.addProduct(balSpeed2Black);
    balSpeed2Black.addSizes(balSpeed2BlackSizes);

    // ============================================================ //

    const balTripleS = await Product.create({
        name: "Balenciaga Triple S",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTripleSCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balTripleSBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTripleSSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTripleSBrand.addProduct(balTripleS);
    balTripleSCategory.addProduct(balTripleS);
    balTripleS.addSizes(balTripleSSizes);


    // ============================================================ //

    const balTrack = await Product.create({
        name: "Balenciaga Track",
        image: "",
        description: "",
        price: 105.35,
        status: "disponible" ,
    });

    const balTrackCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balTrackBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTrackSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTrackBrand.addProduct(balTrack);
    balTrackCategory.addProduct(balTrack);
    balTrack.addSizes(balTrackSizes);


    // ============================================================ //

    const balPoolSlides = await Product.create({
        name: "Balenciaga Pool Slides",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balPoolSlidesCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balPoolSlidesBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balPoolSlidesSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balPoolSlidesBrand.addProduct(balPoolSlides);
    balPoolSlidesCategory.addProduct(balPoolSlides);
    balPoolSlides.addSizes(balPoolSlidesSizes);

    // ============================================================ //

    const balTrackBlack = await Product.create({
        name: "Balenciaga Track Black",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTrackBlackCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balTrackBlackBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTrackBlackSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTrackBlackBrand.addProduct(balTrackBlack);
    balTrackBlackCategory.addProduct(balTrackBlack);
    balTrackBlack.addSizes(balTrackBlackSizes);

    // ============================================================ //

    const balSpeedGraffBlackWhite = await Product.create({
        name: "Balenciaga Speed Graffiti Trainers Black White",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balSpeedGraffBlackWhiteCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const balSpeedGraffBlackWhiteBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balSpeedGraffBlackWhiteSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balSpeedGraffBlackWhiteBrand.addProduct(balSpeedGraffBlackWhite);
    balSpeedGraffBlackWhiteCategory.addProduct(balSpeedGraffBlackWhite);
    balSpeedGraffBlackWhite.addSizes(balSpeedGraffBlackWhiteSizes);

    // ============================================================ //


    const balTrackTraiBurgundyBlack = await Product.create({
        name: "Balenciaga Track Trainers Burgundy Black",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTrackTraiBurgundyBlackCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balTrackTraiBurgundyBlackBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTrackTraiBurgundyBlackSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTrackTraiBurgundyBlackBrand.addProduct(balTrackTraiBurgundyBlack);
    balTrackTraiBurgundyBlackCategory.addProduct(balTrackTraiBurgundyBlack);
    balTrackTraiBurgundyBlack.addSizes(balTrackTraiBurgundyBlackSizes);

    // ============================================================ //

    const balTrackTrainerPink = await Product.create({
        name: "Balenciaga Track Trainer Pink",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTrackTrainerPinkCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balTrackTrainerPinkBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTrackTrainerPinkSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTrackTrainerPinkBrand.addProduct(balTrackTrainerPink);
    balTrackTrainerPinkCategory.addProduct(balTrackTrainerPink);
    balTrackTrainerPink.addSizes(balTrackTrainerPinkSizes);
    // ============================================================ //

    const balTripleSCrystalClearSole = await Product.create({
        name: "Balenciaga Triple S Crystal Clear Sole",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTripleSCrystalClearSoleCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balTripleSCrystalClearSoleBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTripleSCrystalClearSoleSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });

    balTripleSCrystalClearSoleBrand.addProduct(balTripleSCrystalClearSole);
    balTripleSCrystalClearSoleCategory.addProduct(balTripleSCrystalClearSole);
    balTripleSCrystalClearSole.addSizes(balTripleSCrystalClearSoleSizes);
   
    // ============================================================ //

    const balTripleSPink = await Product.create({
        name: "Balenciaga Triple S Pink",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTripleSPinkCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balTripleSPinkBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTripleSPinkSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTripleSPinkBrand.addProduct(balTripleSPink);
    balTripleSPinkCategory.addProduct(balTripleSPink);
    balTripleSPink.addSizes(balTripleSPinkSizes);

    // ============================================================ //

    const balTripleSLightBlue = await Product.create({
        name: "Balenciaga Triple S Light Blue",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balTripleSLightBlueCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balTripleSLightBlueBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balTripleSLightBlueSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balTripleSLightBlueBrand.addProduct(balTripleSLightBlue);
    balTripleSLightBlueCategory.addProduct(balTripleSLightBlue);
    balTripleSLightBlue.addSizes(balTripleSLightBlueSizes);

    // ============================================================ //

    const balFurrySlideBlack = await Product.create({
        name: "Balenciaga Furry Slide Black",
        image: "",
        description: "",
        price: 450.99,
        status: "disponible" ,
    });

    const balFurrySlideBlackCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ['id']
    });

    const balFurrySlideBlackBrand = await Brand.findOne({
        where: {
            id: 8,
        },
        attributes: ['id']
    });

    const balFurrySlideBlackSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    balFurrySlideBlackBrand.addProduct(balFurrySlideBlack);
    balFurrySlideBlackCategory.addProduct(balFurrySlideBlack);
    balFurrySlideBlack.addSizes(balFurrySlideBlackSizes);

};

module.exports = { balenciagaMockUp };
