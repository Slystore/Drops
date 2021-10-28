const { Brand } = require("../../db.js");

const brandMockUp = async () => {
  await Brand.create({
    name: "Nike",
  });
  await Brand.create({
    name: "Jordan",
  });
  await Brand.create({
    name: "Off-White",
  });
  await Brand.create({
    name: "Adidas",
  });
  await Brand.create({
    name: "Puma",
  });
  await Brand.create({
    name: "Reebok",
  });
  await Brand.create({
    name: "Gucci",
  });
  await Brand.create({
    name: "Balenciaga",
  });
  await Brand.create({
    name: "Under Armour",
  });
  await Brand.create({
    name: "Vans",
  });
};

module.exports = { brandMockUp };
