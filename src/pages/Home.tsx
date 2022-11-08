import { useEffect } from "react"
import { usePokemon } from "../hooks/usePokemon"

export function Home(){
  const {data} = usePokemon()

  return (
    <div>
      <h2>Pokedex</h2>
      {JSON.stringify(data?.map(pk => pk.name))}
    </div>
  )
}