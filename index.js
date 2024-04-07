const { ApolloServer, gql } = require('apollo-server');
const sessions = require('./data/sessions.json');



const typeDefs = gql`
type Query {
    sessions: [Session]
}

type Session    {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    level: String
    track:String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to tags soon")
}`

const resolvers = {
    Query: {
        sessions: () => sessions
    }
}
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

