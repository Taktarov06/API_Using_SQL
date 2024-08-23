const { Router } = require('express');
const ControllerPeople = require('../controllers/ControllerPeople.js');

const personController = new ControllerPeople();
const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));
router.get('/people/:id', (req, res) => personController.getById(req, res))
router.post('/people', (req, res) => personController.create(req, res))
router.put('/people/:id', (req, res) => personController.update(req, res));
router.delete('/people/:id', (req, res) => personController.deleteRegister(req, res));



module.exports = router;
