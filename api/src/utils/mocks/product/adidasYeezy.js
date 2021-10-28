const { Brand, Category, Product, Size } = require("../../../db.js");

const adidasYeezyMockUp = async () => {
        // -------------------------Urbano--------------------------- //

    const beluga = await Product.create({
        name: "Adidas Yeezy 350 v2 Beluga",
        image: "",
        description: "",
        price: 220.25,
        status: "disponible",
    });

    const belugaCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const belugaBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const belugaSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    belugaCategory.addProduct(beluga)
    belugaBrand.addProduct(beluga)
    beluga.addSize(belugaSize)

    // ============================================================ //
    const citrin = await Product.create({
        name: "Adidas Yeezy 350 v2 Citrin Reflective",
        image: "",
        description: "",
        price: 285.02,
        status: "disponible",
    });

    const citrinCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const citrinBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const citrinSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    citrinCategory.addProduct(citrin)
    citrinBrand.addProduct(citrin)
    citrin.addSize(citrinSize)

    // ============================================================ //
    const v2Static = await Product.create({
        name: "Adidas Yeezy 350 v2 Static ",
        image: "",
        description: "",
        price: 145.15,
        status: "disponible",
    });

    const v2StaticCategory = await Category.findOne({
        where: {
            id: 2,
        },
        attributes: ["id"],
    });

    const v2StaticBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const v2StaticSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    v2StaticCategory.addProduct(v2Static)
    v2StaticBrand.addProduct(v2Static)
    v2Static.addSize(v2StaticSize)

    // ============================================================ //

    const enflame = await Product.create({
        name: "Adidas Yeezy 500 Enflame",
        image: "",
        description: "",
        price: 215.35,
        status: "disponible",
    });

    const  enflameCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  enflameBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  enflameSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    enflameCategory.addProduct(enflame)
    enflameBrand.addProduct(enflame)
    enflame.addSize(enflameSize)

    // ============================================================ //

    const taupe = await Product.create({
        name: "Adidas Yeezy 500 Taupe Light",
        image: "",
        description: "",
        price: 146.15,
        status: "disponible",
    });

    const  taupeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  taupeBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  taupeSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    taupeCategory.addProduct(taupe)
    taupeBrand.addProduct(taupe)
    taupe.addSize(taupeSize)

    // ============================================================ //

    const brightCyan = await Product.create({
        name: "Adidas Yeezy 700 MNVN Bright Cyan",
        image: "",
        description: "",
        price: 115.35,
        status: "disponible",
    });

    const  brightCyanCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  brightCyanBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  brightCyanSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    brightCyanCategory.addProduct(brightCyan)
    brightCyanBrand.addProduct(brightCyan)
    brightCyan.addSize(brightCyanSize)

    // ============================================================ //

    const geode = await Product.create({
        name: "Adidas Yeezy Boost 700 V2 Geode",
        image: "",
        description: "",
        price: 174.65,
        status: "disponible",
    });

    const  geodeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  geodeBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  geodeSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    geodeCategory.addProduct(geode)
    geodeBrand.addProduct(geode)
    geode.addSize(geodeSize)

    // ============================================================ //

    const salt = await Product.create({
        name: "adidas Yeezy Boost 700 Salt",
        image: "",
        description: "",
        price: 105.65,
        status: "disponible",
    });

    const  saltCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  saltBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  saltSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    saltCategory.addProduct(salt)
    saltBrand.addProduct(salt)
    salt.addSize(saltSize)

    // ============================================================ //

    const cream = await Product.create({
        name: "Adidas Yeezy Foam RNNR MX Cream Cl",
        image: "",
        description: "",
        price: 105.65,
        status: "disponible",
    });

    const  creamCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  creamBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  creamSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    creamCategory.addProduct(cream)
    creamBrand.addProduct(cream)
    cream.addSize(creamSize)

    // ============================================================ //

    const enflameOrange = await Product.create({
        name: "Adidas Yeezy Slide Enflame Orange",
        image: "",
        description: "",
        price: 235.65,
        status: "disponible",
    });

    const  enflameOrangeCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  enflameOrangeBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  enflameOrangeSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    enflameOrangeCategory.addProduct(enflameOrange)
    enflameOrangeBrand.addProduct(enflameOrange)
    enflameOrange.addSize(enflameOrangeSize)

    // ============================================================ //

    const pure = await Product.create({
        name: "Adidas Yeezy Slide Pure",
        image: "",
        description: "",
        price: 115.65,
        status: "disponible",
    });

    const  pureCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  pureBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  pureSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    pureCategory.addProduct(pure)
    pureBrand.addProduct(pure)
    pure.addSize(pureSize)
  
    // ============================================================ //

    const soot = await Product.create({
        name: "Adidas Yeezy Slide Soot",
        image: "",
        description: "",
        price: 243.65,
        status: "disponible",
    });

    const  sootCategory = await Category.findOne({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const  sootBrand = await Brand.findOne({
        where: {
            id: 4,
        },
        attributes: ["id"],
    });

    const  sootSize = await Size.findAll({
        where: {
            id: [5,6,7,8,9 ]
        }
    })

    sootCategory.addProduct(soot)
    sootBrand.addProduct(soot)
    soot.addSize(sootSize)
  

    // -------------------------Urbano--------------------------- //

}
module.exports = { adidasYeezyMockUp };
