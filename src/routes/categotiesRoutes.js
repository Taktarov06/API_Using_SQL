const { Router } = require('express');
const ControllerCategoty = require('../controllers/ControllerCategoty.js');

const categoryController = new ControllerCategoty();
const router = Router();

router.get('/categoty', (req, res) => categoryController.getAll(req, res));
router.get('/categoty/:id', (req, res) => categoryController.getById(req, res))
router.post('/categoty', (req, res) => categoryController.create(req, res))
router.put('/categoty/:id', (req, res) => categoryController.update(req, res));
router.delete('/categoty/:id', (req, res) => categoryController.deleteRegister(req, res));



module.exports = router;
