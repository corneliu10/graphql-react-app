import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import CreateAgent from "./components/CreateAgent";

const client = new ApolloClient({
  uri: "http://localhost:4000"
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
