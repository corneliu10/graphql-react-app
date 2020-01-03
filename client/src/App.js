import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { createUploadLink } from "apollo-upload-client";
import CreateAgent from "./components/CreateAgent";

import "./App.css";

const link = createUploadLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>RentZend</h1>
        <CreateAgent />
      </div>
    </ApolloProvider>
  );
}

export default App;
