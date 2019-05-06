const express = require('express');
const app = express();
const cors = require('cors')
app.set('port', process.env.PORT || 3001)
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

var corsOpt = {
  origin: 'http://localhost:3001',
  successStatus: 200
}

app.use(cors(corsOpt))
app.use(express.json())

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

// custom api end point**

app.get('/api/projects', (req, res) => {

})

app.get('/api/palettes', (req, res) => {

})

app.get('/api/projects/:id', (req, res) => {

})

app.get('/api/palettes/:id', (req, res) => {

})

app.post('/api/projects', (req, res) => {

})

app.post('/api/palettes', (req, res) => {

})

app.patch('/api/projects/:id', (req, res) => {

})

app.patch('/api/palettes/:id', (req, res) => {

})

app.delete('/api/project/:id', (req, res) => {

})

app.delete('/api/palettes/:id', (req, res) => {

})