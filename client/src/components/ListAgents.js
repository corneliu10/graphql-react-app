import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const QUERY = gql`
  query {
    books {
      title
    }
  }
`;

export class ListAgents extends Component {
  render() {
    return (
      <div>
        <Query query={QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) throw error;

            return data.books.map(b => {
              return <h1 key={b.title}>{b.title}</h1>;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default ListAgents;
