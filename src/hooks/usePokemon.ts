import axios from 'axios';
import {useQuery} from 'react-query'
import { Pokemon } from '../entities/pokemon'
import { pokeApi } from '../services/poke-api'

interface PokeApiPkmn {
  name: string;
  url: string;
}

async function fetchPokemons(): Promise<string[]>{
  const {data: rawData} = await pokeApi.get('/pokemon')
  const data = JSON.parse(rawData)

  return data.results.map((pk: any) => pk.name)
}
async function fetchPokemon(name: string): Promise<Pokemon>{
  const {data: rawData} = await pokeApi.get(`/pokemon/${name}`)
  const data = JSON.parse(rawData)

  return new Pokemon({
    id: data.id,
    image: data.sprites.front_default,
    name: name,
    types: []
  })
}

export const usePokemons = () => useQuery('pokemons', fetchPokemons)
export const usePokemon = (name: string) => useQuery(['pokemon', name], ()=> fetchPokemon(name))