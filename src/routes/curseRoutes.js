const { Router } = require('express');
const ControllerCurse = require('../controllers/ControllerCurse.js');

const curseController = new ControllerCurse();
const router = Router();

router.get('/curse', (req, res) => curseController.getAll(req, res));
router.get('/curse/:id', (req, res) => curseController.getById(req, res))
router.post('/curse', (req, res) => curseController.create(req, res))
router.put('/curse/:id', (req, res) => curseController.update(req, res));
router.delete('/curse/:id', (req, res) => curseController.deleteRegister(req, res));



module.exports = router;

