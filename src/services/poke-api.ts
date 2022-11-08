import axios from 'axios'

export const pokeApi = axios({
  baseURL: 'https://pokeapi.co/api/v2'
})