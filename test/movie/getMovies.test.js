const getMovies = require('../../src/functions/movie/getMovies')
const { runParams } = require('../util')
const data = require('./movie.json')

describe('movie.getMovies', () => {
  beforeAll((done) => {
    done()
  })

  it('Verificar lista de películas', async () => {
    const response = await runParams(getMovies, {})
    expect(Array.isArray(response.body)).toEqual(true)
    expect(response.statusCode).toEqual(200)
  })
})
