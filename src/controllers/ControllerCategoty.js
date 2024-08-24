const Controller = require('./Controller.js');
const CategotyServices = require('../services/CategotyServices.js');

const categotyServices = new CategotyServices();


class ControllerCategoty extends Controller{
    constructor(){
        super(categotyServices);
    }
}

module.exports = ControllerCategoty;