const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema/schema");
const resolvers = require("./graphql/resolvers/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
