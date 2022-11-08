import { usePokemon } from "../hooks/usePokemon";

interface PokeCardProps {
  name: string;
}

export function PokeCard({name}: PokeCardProps){
  const {data} = usePokemon(name)

  return (
    <div>
      <h2>
        {data?.name}
      </h2>
    </div>
  )
}