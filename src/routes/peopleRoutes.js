const { Router } = require('express');
const ControllerPeople = require('../controllers/ControllerPeople.js');
const ControllerRegistration = require('../controllers/ControllerRegistration.js')

const personController = new ControllerPeople();
const registrationController = new ControllerRegistration();
const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));
router.get('/people/all', (req, res) => personController.getAllPerson(req, res));
router.get('/people/:id', (req, res) => personController.getById(req, res))
router.post('/people', (req, res) => personController.create(req, res))
router.put('/people/:id', (req, res) => personController.update(req, res));
router.delete('/people/:id', (req, res) => personController.deleteRegister(req, res));
router.get('/people/:studentId/registration', (req, res) => personController.getRegistration(req, res))
router.post('/people/:studentId/registration', (req, res) => registrationController.create(req, res))



module.exports = router;
