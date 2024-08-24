const Controller = require('./Controller.js');
const CurseServices = require('../services/CurseServices.js');

const curseServices = new CurseServices();


class ControllerCurse extends Controller{
    constructor(){
        super(curseServices);
    }
}

module.exports = ControllerCurse;