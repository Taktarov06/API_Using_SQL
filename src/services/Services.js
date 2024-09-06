const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegister() {
        return dataSource[this.model].findAll();
    }

    async getRegisterByScope(scope){
        return dataSource[this.model].scope(scope).findAll();
    }

    async gotFromId(id) {
        return dataSource[this.model].findByPk(id);
    }

    async createRegister(createdDatas) {
        return dataSource[this.model].create(createdDatas);
    }

    async updatedRegister(updatedDatas, id) {
        const listOfUpdatedRegister = await dataSource[this.model].update(updatedDatas, {
            where: { id: id }
        });
        if (listOfUpdatedRegister[0] === 0) {
            return false;
        }
        return true;
    }

    async deletedREgister(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;
