const express = require('express');
const routes = express.Router();

const dbController = require('./controllers/dbController')

routes
.get('/', (req, res) => {
    res.send('Hello World!')
  })
.post('/insert', dbController.insert)
module.exports = routes;