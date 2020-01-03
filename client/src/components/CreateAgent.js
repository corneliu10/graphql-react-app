import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_AGENT = gql`
  mutation AgentMutation(
    $name: String!
    $email: String
    $phone: String
    $address: String
    $zipCode: Int
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
    }
  }
`;

export class CreateAgent extends Component {
  state = {
    name: "",
    email: ""
  };

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="Email"
        />
        <Mutation mutation={CREATE_AGENT} variables={{ name, email }}>
          {agentMutation => <button onClick={agentMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateAgent;
