const { Category } = require("../../db.js");

const categoryMockUp = async () => {
    await Category.create({
        name: "Urbano",
    });
    await Category.create({
        name: "Deportivo",
    });
    await Category.create({
        name: "Sandalias",
    });
};

module.exports = { categoryMockUp };
