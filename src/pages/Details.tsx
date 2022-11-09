import {useParams} from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'

export function Details(){
  const {pokemon} = useParams()

  if(!pokemon) return <p>Pokemon not found</p>

  const {data, isError, isLoading} = usePokemon(pokemon)

  if(!data) return <p>Not found</p>
  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>
  return (
    <div>
      <h2 className="text-white text-5xl font-bold">
        {pokemon}
      </h2>
      <img 
        src={data.image}
      />
    </div>
  )
}