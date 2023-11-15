const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRouter = require('./routes/notes')


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRouter)

  //app.use('/api', apiRouter)

  app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'))
  });

  app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
  });

  //app.use((err, req, res, next) =>{
    //console.error(err.stack);
    //res.status(500).send('Something went wrong')
  //})

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
