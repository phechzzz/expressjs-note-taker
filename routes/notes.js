const express = require('express');
const router = express.Router();
const { readFromFile, readAndAppend, deleteFromFile } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')

router.get('/notes', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });

  router.post('/notes', (req, res) => {
    const { title, text } = req.body;
  
    if (title && text) {
      const newNote = {
        title,
        text,
        id: uuid(), 
      };
  
      readAndAppend(newNote, './db/notes.json').then(() => res.json(newNote));
    } else {
      res.status(400).json({ error: 'Title and text are required.' });
    }
  });

  router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
  
    if (noteId) {
      deleteFromFile(noteId, './db/notes.json').then(() => res.json({ success: true }));
    } else {
      res.status(400).json({ error: 'Note ID is required.' });
    }
  });
  
  module.exports = router