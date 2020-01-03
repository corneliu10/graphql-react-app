const db = require("../../config/database");
const Agent = require("../../models/Agent");

const resolvers = {
  Query: {
    agent: async (_, { id }) => {
      const agent = await Agent.findAll({
        where: {
          id
        }
      });

      if (!agent || agent.length === 0) {
        return null; //agent not found;
      }

      return agent[0].dataValues;
    },
    agents: () =>
      Agent.findAll()
        .then(agents => agents)
        .catch(err => {
          throw err;
        })
  },
  Mutation: {
    createAgent: async (
      _,
      { agentInput: { name, email, phone, address, zipCode, files } }
    ) => {
      try {
        const agent = await Agent.create({
          name,
          email,
          phone,
          address,
          zipCode,
          files
        });

        return agent;
      } catch (error) {
        throw error;
      }
    }
  }
};

module.exports = resolvers;
