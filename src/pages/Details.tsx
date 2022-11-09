import {useParams} from 'react-router-dom'
import { TypeLabel } from '../components/TypeLabel'
import { usePokemon } from '../hooks/usePokemon'

export function Details(){
  const {pokemon} = useParams()

  if(!pokemon) return <p>Pokemon not found</p>

  const {data, isError, isLoading} = usePokemon(pokemon)

  if(!data) return <p>Not found</p>
  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-[500px] w-full flex flex-col">
        <h2 className="text-white text-5xl font-bold w-full text-center">
          {pokemon}
        </h2>
        <img 
          src={data.image}
        />
        <div className="flex gap-2">
          {data.types.map(type => {
            return (
              <TypeLabel 
                name={type}
                key={type}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}