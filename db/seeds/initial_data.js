exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "paul", email: "paul@paul.com" },
        { id: 2, name: "rory", email: "rory@paul.com" },
        { id: 3, name: "caitlin", email: "caitlin@paul.com" },
      ]);
    });
};
