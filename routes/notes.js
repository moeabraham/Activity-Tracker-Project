const express= require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');


router.post('/activities/:id/notes', notesCtrl.create);
router.delete('/notes/:id', notesCtrl.delete)
router.get('/notes/:id/edit', notesCtrl.edit)
router.put("/notes/:id", notesCtrl.update)
module.exports = router; 