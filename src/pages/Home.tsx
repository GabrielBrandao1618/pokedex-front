import { PokeCard } from "../components/PokeCard"
import { usePokemons } from "../hooks/usePokemon"

export function Home(){
  const {data, isLoading} = usePokemons()

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>Pokedex</h2>
      {data?.map(pkmn => {
        return (
          <PokeCard 
            name={pkmn}
            key={pkmn}
          />
        )
      })}
    </div>
  )
}