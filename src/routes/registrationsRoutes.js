const { Router } = require('express');
const ControllerRegistration = require('../controllers/ControllerRegistration.js');

const registrationController = new ControllerRegistration();
const router = Router();

router.get('/registration', (req, res) => registrationController.getAll(req, res));
router.get('/registration/:id', (req, res) => registrationController.getById(req, res))
router.post('/registration', (req, res) => registrationController.create(req, res))
router.put('/registration/:id', (req, res) => registrationController.update(req, res));
router.delete('/registration/:id', (req, res) => registrationController.deleteRegister(req, res));


module.exports = router;
