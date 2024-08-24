const Controller = require('./Controller.js');
const RegistrationServices = require('../services/RegistrationServices.js');

const registrationServices = new RegistrationServices();


class ControllerRegistration extends Controller{
    constructor(){
        super(registrationServices);
    }
}

module.exports = ControllerRegistration;