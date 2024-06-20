const Controller = require('./Controller.js');
const PersonService = require('../services/PersonService.js');

const personService = new PersonService();


class ControllerPeople extends Controller{
    constructor(){
        super(personService);
    }
}

module.exports = ControllerPeople;