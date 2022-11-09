import { useState } from "react"
import { PokeCard } from "../components/PokeCard"
import { usePokemons } from "../hooks/usePokemon"

export function Home(){
  const [currentPage, setCurrentPage] = useState(1)
  const {data, isLoading} = usePokemons(currentPage)

  function changePage(num: number) {
    setCurrentPage(currentPage+num)
  }

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-gray-100 font-bold text-5xl w-full text-center">
        Pokedex
      </h1>
      <div className="flex w-full flex-wrap p-4 justify-around">
        {data?.map(pkmn => {
          return (
            <PokeCard 
              name={pkmn}
              key={pkmn}
            />
          )
        })}
      </div>
      <button onClick={e => changePage(-1)}>
        Previous page
      </button>
      <span>
        Current page: {currentPage}
      </span>
      <button onClick={e => changePage(1)}>
        Next page
      </button>
    </div>
  )
}