const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');



const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})

// Note - can set NODE_ENV to 'production' to disable playground and 
// still allow introspection (and remove the introspection and 
// playground properties from the ApolloServer constructor below)
const server = new ApolloServer(
    { 
        typeDefs, 
        resolvers, 
        dataSources,
        introspection: true,
        playground: true,
    });

server.listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

