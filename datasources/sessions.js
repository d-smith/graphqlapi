const sessions = require('../data/sessions.json');
const {DataSource} = require('apollo-datasource');

class SessionAPI extends DataSource {
    constructor() {
        super();
    }
    initialize(config) {
        this.context = config.context;
    }
    getSessions() {
        return sessions;
    }
}

module.exports = SessionAPI;