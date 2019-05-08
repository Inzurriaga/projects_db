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
  database('projects').select()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.get('/api/palettes', (req, res) => {
  database('palettes').select()
    .then(palettes => {
      res.status(200).json(palettes)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.get('/api/projects/:id', (req, res) => {
  const id = req.params.id
  const errMsg = { error: `No Project with ID of ${id} found` }
  database('projects').where('id', id).select()
    .then(project => {
      if (project.length === 0) return res.status(404).json(errMsg)
      res.status(200).json(project[0])
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.get('/api/palettes/:id', (req, res) => {
  const id = req.params.id
  const errMsg = { error: `No palette with ID of ${id} found` }
  database('palettes').where('id', id).select()
    .then(palette => {
      if (palette.length === 0) return res.status(404).json(errMsg)
      res.status(200).json(palette[0])
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.post('/api/projects', (req, res) => {
  const project = req.body

  for (let requiredParam of ['name', 'desc']) {
    if (!project[requiredParam]) {
      const errMsg = { error: `Expected format: { name: <String>, desc: <String> }. You're missing a "${requiredParam}" property.` }
      return res.status(422).json(errMsg)
    }
  }

  database('projects').insert(project, 'id')
    .then(projectId => {
      res.status(201).json(`Project created, ID: ${projectId}`)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.post('/api/palettes', (req, res) => {
  const palette = req.body

  for (let requiredParam of ['name', 'color1', 'color2', 'color3', 'color4', 'color5']) {
    if (!palette[requiredParam]) {
      const errMsg = {
        error: `Expected format: 
        { name: <String>,
          color1: <String>,
          color2: <String>,
          color3: <String>,
          color4: <String>,
          color5: <String> }. You're missing a "${requiredParam}" property.`
      }
      return res.status(422).json(errMsg)
    }
  }

  database('palettes').insert(palette, 'id')
    .then(paletteId => {
      res.status(201).json(`palette created, ID: ${paletteId}`)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

app.patch('/api/projects/:id', (req, res) => {

})

app.patch('/api/palettes/:id', (req, res) => {

})

app.delete('/api/project/:id', (req, res) => {

})

app.delete('/api/palettes/:id', (req, res) => {

})