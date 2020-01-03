import gql from "graphql-tag";

const CREATE_AGENT = gql`
  mutation AgentMutation(
    $name: String!
    $email: String!
    $phone: String
    $address: String
    $zipCode: String
    $files: [String!]
  ) {
    createAgent(
      agentInput: {
        name: $name
        email: $email
        phone: $phone
        address: $address
        zipCode: $zipCode
        files: $files
      }
    ) {
      name
      email
      phone
      address
      zipCode
      files
    }
  }
`;

export default CREATE_AGENT;
