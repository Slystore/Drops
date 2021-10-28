const { Brand, Product, Category } = require("../../../db.js");


const nikeMockUpPrueba = async () => {
    const airForceOneFelt = await Product.create({
        name: "AIR FORCE 1 FELT GS",
        image: "",
        description: "",
        price: 105.25,
        status: "disponible" ,
    });
    
    const airForce1FeltCategory = await Category.findAll({
        where: {
            id: 1,
        },
        attributes: ["id"],
    });

    const airForce1FeltBrand = await Brand.findOne({
        where: {
            id: 1,
        },
        attributes: ["id", "name"],
    });
    
    console.log(airForce1FeltCategory)
    airForceOneFelt.addCategory(airForce1FeltCategory);
};

module.exports = { nikeMockUpPrueba };
