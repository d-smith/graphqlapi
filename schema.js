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

type Speaker    {
    id: ID!
    bio: String
    name: String
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
    track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to tags soon")
    speakers: [Speaker]
}`