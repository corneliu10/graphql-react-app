import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import CreateAgent from "./CreateAgent";

const QUERY = gql`
  query {
    books {
      title
    }
  }
`;

export class Form extends Component {
  render() {
    return (
      <div>
        <CreateAgent />
        {/* <Query query={QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return data.books.map(b => {
              return <h1 key={b.title}>{b.title}</h1>;
            });
          }}
        </Query> */}
      </div>
    );
  }
}

export default Form;
