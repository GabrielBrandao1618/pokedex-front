import axios from 'axios'

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  responseType: 'json',
  transitional: {
    silentJSONParsing: false
  }
})