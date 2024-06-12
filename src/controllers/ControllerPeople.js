const database = require('../models')

class ControllerPeople {
    static async getAll (req, res, next) {
        try {
            const peopleList = await database.Person.findAll();
            return res.status(200).json(peopleList);
        } catch (error) {   
            
        }
    }
}

module.exports = ControllerPeople;