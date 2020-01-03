const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/schema/schema");
const resolvers = require("./graphql/resolvers/resolvers");

const db = require("./config/database");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
