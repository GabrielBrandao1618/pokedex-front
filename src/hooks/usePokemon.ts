import axios from 'axios';
import {useQuery} from 'react-query'
import { Pokemon } from '../entities/pokemon'
import { pokeApi } from '../services/poke-api'

interface PokeApiPkmn {
  name: string;
  url: string;
}

async function fetchPokemons(page: number): Promise<string[]>{
  const {data: rawData} = await pokeApi.get(`/pokemon?offset${(page*20)-20}`)
  const data = JSON.parse(rawData)

  return data.results.map((pk: PokeApiPkmn) => pk.name)
}
async function fetchPokemon(name: string): Promise<Pokemon>{
  const {data: rawData} = await pokeApi.get(`/pokemon/${name}`)
  const data = JSON.parse(rawData)

  return new Pokemon({
    id: data.id,
    image: data.sprites.front_default,
    name: name,
    types: data.types.map((t1:any) => {
      return t1.type.name
    })
  })
}

export const usePokemons = (page=1) => useQuery(['pokemons', page], () => fetchPokemons(page))
export const usePokemon = (name: string) => useQuery(['pokemon', name], ()=> fetchPokemon(name))