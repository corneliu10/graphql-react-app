var agents = [
  {
    id: 1,
    name: "Agent1",
    email: "agent1@gmail.com",
    phone: "(123) 456-7899",
    address: "Wall Street",
    zipCode: "004433"
  },
  {
    id: 2,
    name: "Agent2",
    email: "agent2@gmail.com",
    phone: "(123) 456-7899",
    address: "Wall Street 2",
    zipCode: "003",
    files: ["./file1", "./file2"]
  }
];

var idCount = 3;

const resolvers = {
  Query: {
    agent: (_, { id }) => {
      return agents.find(a => a.id === parseInt(id, 10));
    },
    agents: () => agents
  },
  Mutation: {
    createAgent: (
      _,
      { agentInput: { name, email, phone, address, zipCode, files } }
    ) => {
      const agent = {
        idCount,
        name,
        email,
        phone,
        address,
        zipCode,
        files
      };

      idCount++;
      agents.push(agent);
      return agent;
    }
  }
};

module.exports = resolvers;
