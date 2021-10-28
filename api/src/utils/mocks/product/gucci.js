const { Brand, Category, Product, Size } = require("../../../db.js");

const gucciMockUp = async () => {
    const web = await Product.create({
        name: "Gucci Web Slide Sandal",
        image: "",
        description: "",
        price: 400.25,
        status: "disponible",
    });

    const webCategory = await Category.findOne({
        where: {
            id: 3,
        },
        attributes: ['id']
    });

    const webBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const webSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    webBrand.addProduct(web);
    webCategory.addProduct(web);
    web.addSizes(webSizes);

    // ============================================================ //

    const ace = await Product.create({
        name: "Gucci Ace",
        image: "",
        description: "",
        price: 480.00,
        status: "disponible" ,
    });

    const aceCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const aceBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const aceSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    aceBrand.addProduct(ace);
    aceCategory.addProduct(ace);
    ace.addSizes(aceSizes);


    // ============================================================ //

    const interlocking = await Product.create({
        name: "Gucci Ace  Interlocking G",
        image: "",
        description: "",
        price: 415.35,
        status: "disponible" ,
    });

    const interlockingCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const interlockingBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const interlockingSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    interlockingBrand.addProduct(interlocking);
    interlockingCategory.addProduct(interlocking);
    interlocking.addSizes(interlockingSizes);


    // ============================================================ //

    const stripe = await Product.create({
        name: "Gucci Ace Stripe Black",
        image: "",
        description: "",
        price: 455.85,
        status: "disponible" ,
    });

    const stripeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const stripeBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const stripeSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9]
        },
        attributes: ["id"]
    });


    stripeBrand.addProduct(stripe);
    stripeCategory.addProduct(stripe);
    stripe.addSizes(stripeSizes);

    // ============================================================ //
    const rhyton = await Product.create({
        name: "Gucci Rhyton",
        image: "",
        description: "",
        price: 495.00,
        status: "disponible" ,
    });

    const rhytonCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const rhytonBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const rhytonSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    rhytonBrand.addProduct(rhyton);
    rhytonCategory.addProduct(rhyton);
    rhyton.addSizes(rhytonSizes);

    // ============================================================ //

    const slides = await Product.create({
        name: "Gucci Slides",
        image: "",
        description: "",
        price: 385.00,
        status: "disponible" ,
    });

    const slidesCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const slidesBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const slidesSizes = await Size.findAll({
        where: {
            id: [4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    slidesBrand.addProduct(slides);
    slidesCategory.addProduct(slides);
    slides.addSizes(slidesSizes);

    // ============================================================ //

    const blade = await Product.create({
        name: "Gucci Ace Blade",
        image: "",
        description: "",
        price: 450.00,
        status: "disponible" ,
    });

    const bladeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const bladeBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const bladeSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    bladeBrand.addProduct(blade);
    bladeCategory.addProduct(blade);
    blade.addSizes(bladeSizes);

    // ============================================================ //

    const snake = await Product.create({
        name: "Gucci Ace Embroidered Snake",
        image: "",
        description: "",
        price: 470.00,
        status: "disponible" ,
    });

    const snakeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const snakeBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const snakeSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    snakeBrand.addProduct(snake);
    snakeCategory.addProduct(snake);
    snake.addSizes(snakeSizes);
    // ============================================================ //

    const slideWhite = await Product.create({
        name: "Gucci Stripe Slide White",
        image: "",
        description: "",
        price: 355.00,
        status: "disponible" ,
    });

    const slideWhiteCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const slideWhiteBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const slideWhiteSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    slideWhiteBrand.addProduct(slideWhite);
    slideWhiteCategory.addProduct(slideWhite);
    slideWhite.addSizes(slideWhiteSizes);
    // ============================================================ //

    const rubber = await Product.create({
        name: "Gucci GG Slide Rubber Black",
        image: "",
        description: "",
        price: 400.00,
        status: "disponible" ,
    });

    const rubberCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const rubberBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const rubberSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attributes: ["id"]
    });


    rubberBrand.addProduct(rubber);
    rubberCategory.addProduct(rubber);
    rubber.addSizes(rubberSizes);

    // ============================================================ //

    const minigg = await Product.create({
        name: "Gucci Screener Mini GG White",
        image: "",
        description: "",
        price: 480.00,
        status: "disponible" ,
    });

    const miniggCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const miniggBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const miniggSizes = await Size.findAll({
        where: {
            id: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    miniggBrand.addProduct(minigg);
    miniggCategory.addProduct(minigg);
    minigg.addSizes(miniggSizes);

    // ============================================================ //

    const aceEmbroidered = await Product.create({
        name: "Gucci AceEmbroidered",
        image: "",
        description: "",
        price: 500.00,
        status: "disponible" ,
    });

    const aceEmbroideredCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ['id']
    });

    const aceEmbroideredBrand = await Brand.findOne({
        where: {
            id: 7,
        },
        attributes: ['id']
    });

    const aceEmbroideredSizes = await Size.findAll({
        where: {
            id: [ 3, 4, 5, 6, 7, 8]
        },
        attributes: ["id"]
    });


    aceEmbroideredBrand.addProduct(aceEmbroidered);
    aceEmbroideredCategory.addProduct(aceEmbroidered);
    aceEmbroidered.addSizes(aceEmbroideredSizes);


    //-------------------stret wear -------------------//

};

module.exports = { gucciMockUp };
