
exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex('users').insert([
    { 
      username: "cars123",
      password: "Ilikecars",
      role: 2
    },
    { 
      username: "planes123",
      password: "Ilikeplanes",
      role: 2
    },
    { 
      username: "admin",
      password: "admin1",
      role: 1
    }
  ]);

};
