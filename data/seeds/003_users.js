
exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex('users').insert([
    { 
      username: "cars",
      password: "ilikecars",
      role: 2
    },
    { 
      username: "planes",
      password: "likeplanes",
      role: 2
    },
    { 
      username: "admin",
      password: "admin",
      role: 1
    }
  ]);

};
