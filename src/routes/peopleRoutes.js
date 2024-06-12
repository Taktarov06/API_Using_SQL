const { Router } = require('express');
const ControllerPeople = require('../controllers/ControllerPeople.js');

const router = Router();

router.get('/people', ControllerPeople.getAll);



module.exports = router;
