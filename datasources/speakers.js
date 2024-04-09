const {RESTDataSource} = require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000/speakers';
    }

    async getSpeakers() {
        const data = await this.get('/');
        console.log(`getSpeakers data: ${data}`);
        return data;
    }

    async getSpeakerById(id) {
        const data = await this.get(`/${id}`);
        console.log(`getSpeakerById data: ${data}`);
        return data;
    }
}

module.exports = SpeakerAPI;