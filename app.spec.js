const app = require('./app')
const request = require('supertest')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration)

describe('/api', () => {
  beforeEach(async () => {
    await database.seed.run()
  })
  describe('GET all', () => {
    it('Should return all projects and status 200', async () => {
      const response = await request(app).get('/api/projects')

      expect(response.status).toBe(200)
    })
    it.skip('Should return all palettes and status 200', () => {

    })
  })
  describe('GET /projects/:id', () => {
    it.skip('Should a specific project and status 200', () => {

    })
    it.skip('Should return error msg and status 404 if none found', () => {

    })
  })
  describe('GET /projects/palettes/:id', () => {
    it.skip('Should a specific palette and status 200', () => {

    })
    it.skip('Should return error msg and status 404 if none found', () => {

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