import {MouseEvent} from 'react'

import {useNavigate} from 'react-router-dom'

import { usePokemon } from "../hooks/usePokemon";

interface PokeCardProps {
  name: string;
}

export function PokeCard({name}: PokeCardProps){
  const {data, isLoading} = usePokemon(name)

  const navigate = useNavigate()

  async function handleOpenDetails(e: MouseEvent<HTMLDivElement>){
    e.preventDefault()
    navigate({
      pathname: `/details/${name}`
    })
  }

  if(isLoading) return <p>Loading...</p>
  if(!data) return <p>Not found...</p>

  return (
    <div 
      className="m-1 w-full max-w-[160px] bg-gray-800 rounded-xl cursor-pointer"
      onClick={handleOpenDetails}
    >
      <img 
        src={data.image}
        className="w-full h-auto"
      />
      <div className="p-2 flex flex-col gap-1">
        <h3 className="text-gray-200 text-xl font-semibold w-full text-center">
          {name}
        </h3>
      </div>
    </div>
  )
}