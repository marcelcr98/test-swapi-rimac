const getMovieSwapi = require('../../src/functions/movie/getMovieSwapi')
const { runParams } = require('../util')
const data = require('./movie.json')

describe('movie.getMovieSwapi', () => {
  beforeAll((done) => {
    done()
  })

  it('Película encontrada', async () => {
    const response = await runParams(getMovieSwapi, { id: 1 })
    expect(response.body).toEqual(data)
    expect(response.statusCode).toEqual(200)
  })

  it('Película no encontrada', async () => {
    const response = await runParams(getMovieSwapi, { id: 8888 })
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(404)
  })
})
