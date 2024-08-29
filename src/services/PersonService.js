const Services = require('./Services.js')

class PersonService extends Services{
    constructor(){
        super('Person');
    }

    async getRegistrationByStudent(id){
        const student = await super.gotFromId(id);
        const registrationList = await student.getAulasMatriculadas();
        return registrationList;
    }
}

module.exports = PersonService;