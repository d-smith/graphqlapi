const { gql } = require('apollo-server-express');

module.exports = gql`
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

    speakers : [Speaker]
    speakerById(id: ID): Speaker
}

type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
}

type Speaker    {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}

input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    level: String
    track: String
    favorite: Boolean
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
    speakers: [Speaker]
    favorite: Boolean
}`