const { gql } = require("apollo-server");

const schema = gql`
  type Agent {
    id: ID!
    name: String!
    email: String
    phone: String
    address: String
    zipCode: Int
    files: [String!]
  }

  input AgentInput {
    name: String!
    email: String
    phone: String
    address: String
    zipCode: Int
    files: [String!]
  }

  type Query {
    agents: [Agent]
  }

  type Mutation {
    createAgent(agentInput: AgentInput!): Agent!
  }
`;

module.exports = schema;
