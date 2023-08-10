const express = require('express');
const router = express.Router();

const controller = require('../controller/noteController');

router.post('/directory/note', controller.createNote);

router.get('/directory/note', controller.getNote);

router.get('/directory/note/:id', controller.getNoteById);

router.put('/directory/note/:id', controller.editNote);

router.delete('/directory/note/:id', controller.deleteNote);
