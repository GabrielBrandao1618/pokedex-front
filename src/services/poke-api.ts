import {Axios} from 'axios'

export const pokeApi = new Axios({
  baseURL: 'https://pokeapi.co/api/v2',
  responseType: 'json'
})