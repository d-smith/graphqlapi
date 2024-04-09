const _ = require('lodash');

module.exports = {
    Query: {
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        },
        speakers: (parent, args, { dataSources }, info) => {
            return dataSources.speakerAPI.getSpeakers();
        },
        speakerById: (parent, { id }, { dataSources }, info) => {
            return dataSources.speakerAPI.getSpeakerById(id);
        }
    },
    Session: {
        // Could loop over the speakers and retrieve details from
        // each one instead of grabbing all speakers and filtering out
        // everyone that is not a speaker for this session. This
        // implementation takes advantage of the speaker list not being
        // that large and the caching done by Apollo Server.
        async speakers(session, args, { dataSources }, info) {
            const speakers = await dataSources.speakerAPI.getSpeakers();
            const filtered = speakers.filter(speaker => {
                return _.filter(session.speakers, { id: speaker.id }).length > 0;
            });
            console.log(filtered);
            return filtered;
        }
    },
};
