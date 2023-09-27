const addMovie = require('../../src/functions/movie/addMovie')
const getMovie = require('../../src/functions/movie/getMovie')
const { runBody, runParams } = require('../util')
const data = require('./movie.json')

describe('movie.postGet', () => {
  beforeAll((done) => {
    done()
  })

  let id
  it('Registrar película', async () => {
    const response = await runBody(addMovie, data )
    id = response.body.id
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(201)
  })

  it('Verificar película registrada', async () => {
    const response = await runParams(getMovie, { id })
    const getData = Object.assign(data, {id} )
    expect(response.body).toEqual(getData)
    expect(response.statusCode).toEqual(200)
  })
})
