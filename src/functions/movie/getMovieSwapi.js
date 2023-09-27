import fetch from 'node-fetch'
import responseJson from '@libs/responseJson'
import CustomError from '@libs/customError'
import traducirData from './utils/traducirData'

export const handler = async (event) => {
  try {
    const { id } = event.pathParameters
    const api = await fetch(`https://swapi.py4e.com/api/films/${id}`)
    const data = await api.json()

    if (data.name === undefined) {
      throw new CustomError('La película no fue encontrada', 404)
    }
    const traduccion = traducirData(data)
    return responseJson(null, traduccion)
  } catch (err) {
    return responseJson(err)
  }
}
