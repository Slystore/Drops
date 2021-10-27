const {Reviews, Users} = require("../../db")

let user, reviews
const seedReviews = async () => {
  const uno = {
    comment: "Libero pariatur provident dicta consequuntur. Earum officia sunt architecto dolores recusandae. Maiores et quas praesentium iure quia qui ut rem. Et repellat in aliquam quae magnam tempore reprehenderit temporibus facere.",
    rating: 2
  }

reviews = await Reviews.create(uno) 

user = await Users.findOne({where: {id:1}})

await user.addReviews(reviews) 

  const dos = {
    comment: "Ad inventore laboriosam temporibus esse. Sunt saepe laudantium eum rerum eum quia est provident ut. Omnis omnis repellendus voluptatibus quia voluptatem quis aut eveniet. Nam adipisci consequatur iste deserunt. Quasi ea aut. Autem quia mollitia ex.\n \rAliquid sequi nihil. Odio est quo. Doloribus ut nulla aperiam odit et id ut. Rerum illum voluptatem est.\n \rFugiat consequuntur mollitia aliquam sunt velit magni odio id. Non rerum ea qui temporibus consequuntur omnis assumenda. Assumenda similique corporis enim eos voluptatum velit itaque animi occaecati. Omnis ipsam quae ipsa. Magni sunt aut. Enim aliquam vel.",
    rating: 2
  };

  reviews = await Reviews.create(dos) 

  user = await Users.findOne({where: {id:1}})

  await user.addReviews(reviews)

  const tres = {
    comment: "Eos eum a sed.\nRepudiandae cupiditate architecto consequuntur amet esse voluptates qui esse quod.",
    rating: 1
  };

  reviews = await Reviews.create(tres) 

user = await Users.findOne({where: {id:2}})

await user.addReviews(reviews)

  const cuatro = {
    comment: "Nulla iure iste consequatur assumenda ea.",
    rating: 5
  };

  reviews = await Reviews.create(cuatro) 

user = await Users.findOne({where: {id:2}})

await user.addReviews(reviews)

  const cinco = {
    comment: "provident sapiente exercitationem",
    rating: 4
  };

  reviews = await Reviews.create(cinco) 

user = await Users.findOne({where: {id:3}})

await user.addReviews(reviews)

  const seis = {
    comment: "Eum neque aut asperiores reiciendis sint voluptas vel praesentium accusantium. Eveniet id error fuga doloribus voluptatem eveniet. Odio aliquam totam magni ex qui. Et ratione quia illo ut quaerat aut ut. Dicta voluptatem qui ut magni id omnis. Veniam fugit quisquam sequi dignissimos exercitationem veritatis.\n \rUnde sit repudiandae sit officiis quam debitis aut quo sed. Sapiente aut et repudiandae sed aspernatur quis optio rem. Cum blanditiis perspiciatis vitae.\n \rEa eos et dolorum numquam. Odit esse mollitia. Et porro consectetur quis. Asperiores cupiditate quos. Et earum quod officia nihil doloremque. Doloribus qui velit rerum exercitationem assumenda repudiandae velit ut.",
    rating: 3
  };

  reviews = await Reviews.create(seis) 

user = await Users.findOne({where: {id:3}})

await user.addReviews(reviews)

  const siete = {
    comment: "dolore aperiam autem",
    rating: 4
  };

  reviews = await Reviews.create(siete) 

user = await Users.findOne({where: {id:4}})

await user.addReviews(reviews)

  const ocho = {
    comment: "Iste nihil autem omnis odio. Dolorum perspiciatis voluptas qui ut et quis consequatur eos. Rerum illum sint et est eum aliquid non. Architecto et cum.",
    rating: 3
  };

  reviews = await Reviews.create(ocho) 

user = await Users.findOne({where: {id:4}})

await user.addReviews(reviews)

  const nueve = {
    comment: "Necessitatibus atque maxime minus error recusandae aut nihil nobis. Sunt sit culpa non ut. Tempora architecto dolor dicta debitis ea aliquid consequatur. Voluptate illum dolor dicta autem et voluptates rem velit. Et laudantium similique asperiores eaque eaque. Culpa sed nesciunt repellat officia.",
    rating: 4
  };

  reviews = await Reviews.create(nueve) 

user = await Users.findOne({where: {id:5}})

await user.addReviews(reviews)

  const diez = {
    comment: "Maxime quia est recusandae ea consequatur mollitia totam.",
    rating: 0
  };

  reviews = await Reviews.create(diez) 

user = await Users.findOne({where: {id:5}})

await user.addReviews(reviews)

  const once = {
    comment: "Ad ut earum consequatur.",
    rating: 1
  };

  reviews = await Reviews.create(once) 

user = await Users.findOne({where: {id:6}})

await user.addReviews(reviews)

  const doce = {
    comment: "sunt vel ut",
    rating: 3
  };

  reviews = await Reviews.create(doce) 

user = await Users.findOne({where: {id:6}})

await user.addReviews(reviews)

  const trece = {
    comment: "numquam neque aut",
    rating: 5
  };

  reviews = await Reviews.create(trece) 

user = await Users.findOne({where: {id:7}})

await user.addReviews(reviews)

  const catorce = {
    comment: "Incidunt ut est nisi illo unde.",
    rating: 3
  };

  reviews = await Reviews.create(catorce) 

user = await Users.findOne({where: {id:7}})

await user.addReviews(reviews)

  const quince = {
    comment: "Maiores sit rem dolore magni necessitatibus officiis corrupti atque aut. Sunt vitae eveniet laboriosam omnis et incidunt nostrum. Ea eum optio accusamus sed quo quasi eaque. Ratione doloremque id beatae rerum est. Repellendus sint minima expedita adipisci ullam.",
    rating: 1
  };


  reviews = await Reviews.create(quince) 

user = await Users.findOne({where: {id:8}})

await user.addReviews(reviews)

  const dieciseis = {
    comment: "Assumenda corrupti et omnis. Cumque nisi repellendus. Beatae adipisci hic aut rerum vitae est nobis saepe. Illo qui dolore rem.\n \rOptio voluptas quia et excepturi et sit quis. Nulla non qui ex repellat omnis quos recusandae. Velit ea est alias provident quae ut.\n \rEos eos alias et doloribus nisi. Et velit aut possimus laudantium non. Aut impedit et veritatis perferendis. Quis et et quo totam perspiciatis est est hic. Doloremque deserunt dolore. Ullam molestiae numquam.",
    rating: 5
  };

  reviews = await Reviews.create(dieciseis) 

user = await Users.findOne({where: {id:8}})

await user.addReviews(reviews)

  const diecisiete = {
    comment: "repudiandae",
    rating: 3
  };

  reviews = await Reviews.create(diecisiete) 

user = await Users.findOne({where: {id:9}})

await user.addReviews(reviews)

  const dieciocho = {
    comment: "Et aut occaecati sint deserunt deserunt libero iusto iure. Quo necessitatibus et omnis excepturi totam. Perferendis quia vel eum tempora. Consectetur nobis nobis enim odit sequi repudiandae dolores. Dolorem repellendus fugit distinctio voluptas suscipit optio vitae tempore. Ratione illum qui alias possimus eveniet.",
    rating: 2
  };

  reviews = await Reviews.create(dieciocho) 

user = await Users.findOne({where: {id:9}})

await user.addReviews(reviews)

  const diecinueve = {
    comment: "et eaque sunt",
    rating: 2
  };

  reviews = await Reviews.create(diecinueve) 

user = await Users.findOne({where: {id:10}})

await user.addReviews(reviews)


  const veinte = {
    comment: "beatae velit tempora",
    rating: 2
  }

  reviews = await Reviews.create(veinte) 

user = await Users.findOne({where: {id:10}})

await user.addReviews(reviews)

}
// seedReviews()
module.exports = seedReviews