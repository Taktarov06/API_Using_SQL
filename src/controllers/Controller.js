

class Controller {
    constructor(service) {
        this.service = service
    }

    async getAll(req, res, next) {
        try {
            const registerList = await this.service.getAllRegister();
            return res.status(200).json(registerList);
        } catch (error) {

        }
    }

    async getById(req, res) {
        const { id } = req.params
        try {
            const searchedId = await this.service.gotFromId(Number(id));
            return res.status(200).json(searchedId)
        } catch (error) {

        }
    }

    async create(req, res) {
        const createdDatas = req.body;
        try {
            const registerCreated = await this.service.createRegister(createdDatas)
            return res.status(200).json(registerCreated)
        } catch (error) {

        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedDatas = req.body;
        try {
            const isUpdated = await this.service.updatedRegister(updatedDatas, Number(id))
            if (!isUpdated) {
                return res.status(400).json({ message: `registro não foi atualizado` });
            }
            return res.status(200).json({ message: "Registro atualizado" });
        } catch (error) {

        }
    }

    async deleteRegister(req, res) {
        const { id } = req.params;
        try {
            await this.service.deletedREgister(Number(id))
            return res.status(200).json({ message: `Registro ${id} deletado` });
        } catch (error) {

        }
    }
}

module.exports = Controller;