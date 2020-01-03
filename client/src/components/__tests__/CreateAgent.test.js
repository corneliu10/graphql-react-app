// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import CreateAgent from "../CreateAgent";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

describe("CreateAgent test", () => {
  it("CreateAgent should match snapshot", () => {
    const component = renderer.create(
      <ApolloProvider client={client}>
        <CreateAgent />
      </ApolloProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
