const { Router } = require('express');
const ControllerPeople = require('../controllers/ControllerPeople.js');

const personController = new ControllerPeople();
const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));



module.exports = router;
