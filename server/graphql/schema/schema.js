const { gql } = require("apollo-server");

const schema = gql`
  type Agent {
    id: ID!
    name: String!
    email: String!
    phone: String
    address: String
    zipCode: String
    files: [String!]
  }

  input AgentInput {
    name: String!
    email: String!
    phone: String
    address: String
    zipCode: String
    files: [String!]
  }

  type Query {
    agent(id: ID!): Agent
    agents: [Agent]
  }

  type Mutation {
    createAgent(agentInput: AgentInput!): Agent!
  }
`;

module.exports = schema;
