class Controller {
    constructor(service) {
        this.service = service;
    }

    async getAll(req, res, next) {
        try {
            const registerList = await this.service.getAllRegister();
            return res.status(200).json(registerList);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            }) // Adicionado para passar o erro para o middleware de erro
        }
    }

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const searchedId = await this.service.gotFromId(Number(id));
            if (!searchedId) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }
            return res.status(200).json(searchedId);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            }) // Adicionado para passar o erro para o middleware de erro
        }
    }

    async create(req, res, next) {
        const createdDatas = req.body;
        try {
            const registerCreated = await this.service.createRegister(createdDatas);
            return res.status(201).json(registerCreated);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            }) // Adicionado para passar o erro para o middleware de erro
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const updatedDatas = req.body;
        try {
            const isUpdated = await this.service.updatedRegister(updatedDatas, Number(id));
            if (!isUpdated) {
                return res.status(400).json({ message: 'Registro não foi atualizado' });
            }
            return res.status(200).json({ message: 'Registro atualizado' });
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            }) // Adicionado para passar o erro para o middleware de erro
        }
    }

    async deleteRegister(req, res, next) {
        const { id } = req.params;
        try {
            const deleted = await this.service.deletedREgister(Number(id));
            if (!deleted) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }
            return res.status(200).json({ message: `Registro ${id} deletado` });
        } catch (error) {
            reterroes.status(500).json({
                erro: erro.message
            }) // Adicionado para passar o erro para o middleware de erro
        }
    }
}

module.exports = Controller;
