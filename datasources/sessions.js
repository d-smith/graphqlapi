const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
    constructor() {
        super();
    }
    initialize(config) {
        this.context = config.context;
    }
    getSessions(args) {
        return _.filter(sessions, args);
    }

    getSessionById(id) {
        const session = _.filter(sessions, {id: parseInt(id)});
        return session[0];
    }

    toggleFavoriteSession(id) {
        const session = _.filter(sessions, {id: parseInt(id)});
        session[0].favorite = !session[0].favorite;
        return session[0];
    }

    addNewSession(session) {
        const ids = _.map(sessions, s => s.id);
        const maxId = _.max(ids);
        session.id = maxId + 1;
        sessions.push(session);
        return session;
    }
}

module.exports = SessionAPI;