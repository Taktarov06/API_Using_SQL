const Controller = require('./Controller.js');
const PersonService = require('../services/PersonService.js');

const personService = new PersonService();


class ControllerPeople extends Controller {
    constructor() {
        super(personService);
    }

    async getRegistration(req, res) {
        const { studentId } = req.params;
        try {
            const registrationList = await personService.getRegistrationByStudent(Number(studentId));
            return res.status(200).json(registrationList);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            })
        }
    }

    async getAllPerson(req, res, next) {
        try {
            const listAllPeople = await personService.getRegisterScopeAll();
            return res.status(200).json(listAllPeople);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            })
        }
    }
}

module.exports = ControllerPeople;