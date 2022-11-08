import axios from 'axios';
import {useQuery} from 'react-query'
import { Pokemon } from '../entities/pokemon'
import { pokeApi } from '../services/poke-api'

interface PokeApiPkmn {
  name: string;
  url: string;
}

async function fetchPokemon(): Promise<Pokemon[]>{
  const {data:rawData} = await pokeApi.get('/pokemon')
  const data = JSON.parse(rawData)

  return data.results.map(async (pokemon: PokeApiPkmn) => {
    const {data:detailedInfo} = await axios.get(pokemon.url)
    const sprite = detailedInfo.sprites.front_default
    const types = detailedInfo.types.map((type: any) => type.type.name)
    const id = detailedInfo.id

    return new Pokemon({
      image: sprite,
      name: pokemon.name,
      types: types,
      id: id
    })
  })
}

export const usePokemon = () => useQuery('pokemon', fetchPokemon)