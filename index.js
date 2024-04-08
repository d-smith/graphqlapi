const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');



const typeDefs = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        level: String
        track: String
    ): [Session]
    sessionById(id: ID): Session
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
    track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to tags soon")
}`

const resolvers = {
    Query: {
        sessions: (parent, args,{dataSources}, info) => {
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionAPI()
})
const server = new ApolloServer({ typeDefs, resolvers, dataSources});

server.listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

