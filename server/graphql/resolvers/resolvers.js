var agents = [
  {
    name: "Agent1",
    email: "agent1@gmail.com",
    phone: "(123) 456-7899",
    address: "Wall Street",
    zipCode: "004433"
  },
  {
    name: "Agent2",
    email: "agent2@gmail.com",
    phone: "(123) 456-7899",
    address: "Wall Street 2",
    zipCode: "003",
    files: ["./file1", "./file2"]
  }
];

const resolvers = {
  Query: {
    agents: () => agents
  },
  Mutation: {
    createAgent: (
      _,
      { agentInput: { name, email, phone, address, zipCode, files } }
    ) => {
      const agent = {
        name,
        email,
        phone,
        address,
        zipCode,
        files
      };

      agents.push(agent);
      return agent;
    }
  }
};

module.exports = resolvers;
