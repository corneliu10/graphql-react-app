const Sequelize = require("sequelize");
const db = require("../config/database");

const Agent = db.define("agent", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  zipCode: {
    type: Sequelize.STRING
  }
});

module.exports = Agent;
