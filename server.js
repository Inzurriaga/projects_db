const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3001)
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json())
app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));