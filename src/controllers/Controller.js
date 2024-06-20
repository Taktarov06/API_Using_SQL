

class Controller {
    constructor(service) {
        this.service = service
    }

    async getAll(req, res, next){
        try {
            const registerList = await this.service.getAllRegister();
            return res.status(200).json(registerList);
        } catch (error) {
            
        }
    }
}

module.exports = Controller;