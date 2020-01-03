import React from "react";
import ApolloClient from "apollo-boost";
import Form from "./components/Form";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>RentZend</h1>
        <Form />
      </div>
    </ApolloProvider>
  );
}

export default App;
