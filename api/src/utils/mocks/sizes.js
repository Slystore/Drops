const { Size } = require("../../db.js");

const sizeMock = async () => {
    await Size.create({
        number: 35
    });
    await Size.create({
        number: 36
    });
    await Size.create({
        number: 37
    });
    await Size.create({
        number: 38
    });
    await Size.create({
        number: 39
    });
    await Size.create({
        number: 40
    });
    await Size.create({
        number: 41
    });
    await Size.create({
        number: 42
    });
    await Size.create({
        number: 43
    });
    await Size.create({
        number: 44
    });
    await Size.create({
        number: 45
    });
};

module.exports = { sizeMock };
