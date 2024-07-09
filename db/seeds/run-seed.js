const seed = require("./seed");
const users = require("../data/development/users");
const cities = require("../data/development/cities");

const runSeed = () => {
  return seed(users, cities).then(() => {
    return db.end();
  });
};

runSeed();