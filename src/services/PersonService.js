const Services = require('./Services.js')

class PersonService extends Services{
    constructor(){
        super('Person');
    }
}

module.exports = PersonService;