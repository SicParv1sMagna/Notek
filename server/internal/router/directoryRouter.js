const express = require('express');
const router = express.Router();

const controller = require('../controller/directoryController');

router.post('/directory', controller.createDirectory);

router.get('/directory', controller.getDirectory);

router.get('/directory/:id', controller.getDirectoryById);

router.put('/directory/:id', controller.editDirectory);

router.delete('/directory/:id', controller.deleteDirectory);

module.exports = router;