const { Reviews, Users } = require("../../db");

let user, reviews;
const seedReviews = async () => {
  const uno = {
    comment:
      "Libero pariatur provident dicta consequuntur. Earum officia sunt architecto dolores recusandae.",
    rating: 2,
  };

  reviews = await Reviews.create(uno);

  user = await Users.findOne({ 
    where: { id: 1 } });

  await user.addReviews(reviews);

  const dos = {
    comment:
      "Ad inventore laboriosam temporibus esse. Omnis omnis repellendus voluptatibus quia voluptatem quis aut eveniet. ",
    rating: 2,
  };

  reviews = await Reviews.create(dos);

  user = await Users.findOne({ where: { id: 1 } });

  await user.addReviews(reviews);

  const tres = {
    comment:
      "Eos eum a sed.Repudiandae cupiditate architecto consequuntur amet esse voluptates qui esse quod.",
    rating: 1,
  };

  reviews = await Reviews.create(tres);

  user = await Users.findOne({ where: { id: 2 } });

  await user.addReviews(reviews);

  const cuatro = {
    comment: "Nulla iure iste consequatur assumenda ea.",
    rating: 5,
  };

  reviews = await Reviews.create(cuatro);

  user = await Users.findOne({ where: { id: 2 } });

  await user.addReviews(reviews);

  const cinco = {
    comment: "provident sapiente exercitationem",
    rating: 4,
  };

  reviews = await Reviews.create(cinco);

  user = await Users.findOne({ where: { id: 3 } });

  await user.addReviews(reviews);

  const seis = {
    comment:
      "Eum neque aut asperiores reiciendis sint voluptas vel praesentium accusantium.",
    rating: 3,
  };

  reviews = await Reviews.create(seis);

  user = await Users.findOne({ where: { id: 3 } });

  await user.addReviews(reviews);

  const siete = {
    comment: "dolore aperiam autem",
    rating: 4,
  };

  reviews = await Reviews.create(siete);

  user = await Users.findOne({ where: { id: 4 } });

  await user.addReviews(reviews);

  const ocho = {
    comment:
      "Iste nihil autem omnis odio. Dolorum perspiciatis voluptas qui ut et quis consequatur eos.",
    rating: 3,
  };

  reviews = await Reviews.create(ocho);

  user = await Users.findOne({ where: { id: 4 } });

  await user.addReviews(reviews);

  const nueve = {
    comment:
      "Necessitatibus atque maxime minus error recusandae aut nihil nobis. Sunt sit culpa non ut.",
    rating: 4,
  };

  reviews = await Reviews.create(nueve);

  user = await Users.findOne({ where: { id: 5 } });

  await user.addReviews(reviews);

  const diez = {
    comment: "Maxime quia est recusandae ea consequatur mollitia totam.",
    rating: 0,
  };

  reviews = await Reviews.create(diez);

  user = await Users.findOne({ where: { id: 5 } });

  await user.addReviews(reviews);

  const once = {
    comment: "Ad ut earum consequatur.",
    rating: 1,
  };

  reviews = await Reviews.create(once);

  user = await Users.findOne({ where: { id: 6 } });

  await user.addReviews(reviews);

  const doce = {
    comment: "sunt vel ut",
    rating: 3,
  };

  reviews = await Reviews.create(doce);

  user = await Users.findOne({ where: { id: 6 } });

  await user.addReviews(reviews);

  const trece = {
    comment: "numquam neque aut",
    rating: 5,
  };

  reviews = await Reviews.create(trece);

  user = await Users.findOne({ where: { id: 7 } });

  await user.addReviews(reviews);

  const catorce = {
    comment: "Incidunt ut est nisi illo unde.",
    rating: 3,
  };

  reviews = await Reviews.create(catorce);

  user = await Users.findOne({ where: { id: 7 } });

  await user.addReviews(reviews);

  const quince = {
    comment:
      "Maiores sit rem dolore magni necessitatibus officiis corrupti atque aut.",
    rating: 1,
  };

  reviews = await Reviews.create(quince);

  user = await Users.findOne({ where: { id: 8 } });

  await user.addReviews(reviews);

  const dieciseis = {
    comment:
      "Assumenda corrupti et omnis. Cumque nisi repellendus. Beatae adipisci hic aut rerum vitae est nobis saepe.",
    rating: 5,
  };

  reviews = await Reviews.create(dieciseis);

  user = await Users.findOne({ where: { id: 8 } });

  await user.addReviews(reviews);

  const diecisiete = {
    comment: "repudiandae",
    rating: 3,
  };

  reviews = await Reviews.create(diecisiete);

  user = await Users.findOne({ where: { id: 9 } });

  await user.addReviews(reviews);

  const dieciocho = {
    comment:
      "Et aut occaecati sint deserunt deserunt libero iusto iure. Quo necessitatibus et omnis excepturi totam. ",
    rating: 2,
  };

  reviews = await Reviews.create(dieciocho);

  user = await Users.findOne({ where: { id: 9 } });

  await user.addReviews(reviews);

  const diecinueve = {
    comment: "et eaque sunt",
    rating: 2,
  };

  reviews = await Reviews.create(diecinueve);

  user = await Users.findOne({ where: { id: 10 } });

  await user.addReviews(reviews);

  const veinte = {
    comment: "beatae velit tempora",
    rating: 2,
  };

  reviews = await Reviews.create(veinte);

  user = await Users.findOne({ where: { id: 10 } });

  await user.addReviews(reviews);
};

module.exports = seedReviews;
