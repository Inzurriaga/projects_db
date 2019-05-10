const app = require('./app')
const request = require('supertest')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration)
const projectData = require('./db/seeds/projectsData')

describe('/api', () => {
  beforeEach(async () => {
    await database.seed.run()
  })
  describe('GET all', () => {
    it('Should return all projects and status 200', async () => {
      const expectedLength = projectData.length

      const response = await request(app).get('/api/projects')
      const result = response.body

      expect(response.status).toBe(200)
      expect(result.length).toBe(expectedLength)
    })
    it('Should return all palettes and status 200', async () => {
      let expectedLength = 0;
      projectData.forEach(project => {
        expectedLength += project.palettes.length
      })

      const response = await request(app).get('/api/palettes')
      const result = response.body

      expect(response.status).toBe(200)
      expect(result.length).toBe(expectedLength)
    })
  })
  describe('GET /projects/:id', () => {
    it('Should return a specific project and status 200', async () => {
      const project = await database('projects').first()

      const response = await request(app).get(`/api/projects/${project.id}`)
      const result = response.body

      expect(response.status).toBe(200)
      expect(result.id).toBe(project.id)
    })
    it('Should return error msg and status 404 if none found', async () => {
      const id = 0;

      const response = await request(app).get(`/api/projects/${id}`)
      const result = response.body
      expect(response.status).toBe(404)
      expect(result).toEqual({ error: 'No Project with ID of 0 found' })
    })
  })
  describe('GET /projects/palettes/:id', () => {
    it('Should a specific palette and status 200', async () => {
      const palette = await database('palettes').first()

      const response = await request(app).get(`/api/projects/palettes/${palette.id}`)
      const result = response.body
      expect(response.status).toBe(200)
      expect(result.id).toBe(palette.id)
    })
    it('Should return error msg and status 404 if none found', async () => {
      const id = 0;// refactor

      const response = await request(app).get(`/api/projects/palettes/${id}`)
      const result = response.body
      expect(response.status).toBe(404)
      expect(result).toEqual({ error: 'No Palette with ID of 0 found' })
    })
  })
  describe('POST /projects', () => {
    it.skip('Should add project and status 201', () => {

    })
    it.skip('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('POST /projects/palettes', () => {
    it.skip('Should add palettes and status 201', () => {

    })
    it.skip('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('PATCH /projects/:id', () => {
    it.skip('Should update project and return status 200', () => {

    })
    it.skip('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('PATCH /projects/palettes/:id', () => {
    it.skip('Should update palettes and return status 200', () => {

    })
    it.skip('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('DELETE /projects/:id', () => {
    it.skip('Should remove project and return status 200', () => {

    })
    it.skip('Should return error msg and status 404 if project not found', () => {

    })
  })
  describe('DELETE /projects/palettes/:id', () => {
    it.skip('Should remove palette and return status 200', () => {

    })
    it.skip('Should return error msg and status 404 if palette not found', () => {

    })
  })
})