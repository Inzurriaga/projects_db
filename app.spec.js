const app = require('./server')
const request = require('supertest')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration)

describe('/api', () => {
  beforeEach(async () => {
    await database.seed.run()
  })
  describe('GET all', () => {
    it('Should return all projects and status 200', () => {

    })
    it('Should return all palettes and status 200', () => {

    })
  })
  describe('GET /projects/:id', () => {
    it('Should a specific project and status 200', () => {

    })
    it('Should return error msg and status 404 if none found', () => {

    })
  })
  describe('GET /projects/palettes/:id', () => {
    it('Should a specific palette and status 200', () => {

    })
    it('Should return error msg and status 404 if none found', () => {

    })
  })
  describe('POST /projects', () => {
    it('Should add project and status 201', () => {

    })
    it('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('POST /projects/palettes', () => {
    it('Should add palettes and status 201', () => {

    })
    it('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('PATCH /projects/:id', () => {
    it('Should update project and return status 200', () => {

    })
    it('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('PATCH /projects/palettes/:id', () => {
    it('Should update palettes and return status 200', () => {

    })
    it('Should return error msg and status 422 if incorrect request', () => {

    })
  })
  describe('DELETE /projects/:id', () => {
    it('Should remove project and return status 200', () => {

    })
    it('Should return error msg and status 404 if project not found', () => {

    })
  })
  describe('DELETE /projects/palettes/:id', () => {
    it('Should remove palette and return status 200', () => {

    })
    it('Should return error msg and status 404 if palette not found', () => {

    })
  })
})