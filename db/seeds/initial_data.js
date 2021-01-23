exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Paul" },
        { id: 2, name: "Caitlin" },
        { id: 3, name: "Rory" },
      ]);
    });
};
