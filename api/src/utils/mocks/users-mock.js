const {Users}  = require("../../db.js");

const userData = async () => {
  try{
    await Users.create({
      name: "Dallin",
      surname: "Mayer",
      profileImg: "https://cdn.fakercloud.com/avatars/teylorfeliz_128.jpg",
      mail: "Giovanny.Bernhard@yahoo.com",
      phone: 055 - 704 - 5585,
      location: "2785 Daugherty Islands",
      password: "mxOE5V8Lws_PRA5",
      userType: "user"
    });
    await Users.create({
      name: "Daisy",
      surname: "Kuhic",
      profileImg: "https://cdn.fakercloud.com/avatars/reetajayendra_128.jpg",
      mail: "Caleigh14@hotmail.com",
      phone: 244 - 224 - 7131,
      location: "65019 Kshlerin Fork",
      password: "sOGm16wNRPKxpnM",
      userType: "user"
    });
    await Users.create({
      name: "Therese",
      surname: "Crooks",
      profileImg: "https://cdn.fakercloud.com/avatars/tobysaxon_128.jpg",
      mail: "Pablo63@hotmail.com",
      phone: 238 - 777 - 8133,
      location: "4762 Turner Motorway",
      password: "rvBRaeUt0ork0nK",
      userType: "user"
    });
    await Users.create({
      name: "Justina",
      surname: "Glover",
      profileImg: "https://cdn.fakercloud.com/avatars/ruehldesign_128.jpg",
      mail: "Ruthe.Hudson43@yahoo.com",
      phone: 364 - 994 - 2944,
      location: "4773 Josh Meadows",
      password: "TGI3ODLu829rK0T",
      userType: "user"
    });
    await Users.create({
      name: "Brenna",
      surname: "Wisoky",
      profileImg: "https://cdn.fakercloud.com/avatars/sokaniwaal_128.jpg",
      mail: "Aimee_Hills@hotmail.com",
      phone: 787 - 656 - 4295,
      location: "00359 Montana Divide",
      password: "cDnFW1x_8btgcNJ",
      userType: "user"
    });
    await Users.create({
      name: "Michael",
      surname: "Mann",
      profileImg: "https://cdn.fakercloud.com/avatars/abdulhyeuk_128.jpg",
      mail: "Carmella.Hansen@hotmail.com",
      phone: 1156394561,
      location: "1345 Isaiah Hill",
      password: "WH4H1es_DGGa4oI",
      userType: "user"
    });
    await Users.create({
      name: "Zena",
      surname: "Bednar",
      profileImg: "https://cdn.fakercloud.com/avatars/chaabane_wail_128.jpg",
      mail: "Raul.Rempel@hotmail.com",
      phone: 671 - 884 - 0833,
      location: "268 Destiny Plains",
      password: "HQT4UmHX_ydg0Jg",
      userType: "user"
    });
    await Users.create({
      name: "Melany",
      surname: "Gulgowski",
      profileImg: "https://cdn.fakercloud.com/avatars/rikas_128.jpg",
      mail: "Levi86@gmail.com",
      phone: 327 - 998 - 5738,
      location: "28195 Virgie Neck",
      password: "FzeW5aKIUDl15XX",
      userType: "user"
    });
    await Users.create({
      name: "Makenzie",
      surname: "Waters",
      profileImg: "https://cdn.fakercloud.com/avatars/kucingbelang4_128.jpg",
      mail: "Kylie.Welch@yahoo.com",
      phone: 687 - 502 - 3140,
      location: "94993 Alexis Village",
      password: "usXY0L_sccBFkCZ",
      userType: "user"
    });
    await Users.create({
      name: "Randal",
      surname: "Mills",
      profileImg: "https://cdn.fakercloud.com/avatars/ernestsemerda_128.jpg",
      mail: "Terrill_Larson@hotmail.com",
      phone: 975 - 509 - 7020,
      location: "250 Corine Plains",
      password: "x3rnIVFYhtYsU99",
      userType: "user"
    });
  }catch(err){
    console.log(err);
  }
};


module.exports = { userData };
