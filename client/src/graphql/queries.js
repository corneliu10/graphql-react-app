import gql from "graphql-tag";

const AGENTS_QUERY = gql`
  query {
    agents {
      name
      email
      phone
      address
      zipCode
      filesUrl
    }
  }
`;

export default AGENTS_QUERY;
