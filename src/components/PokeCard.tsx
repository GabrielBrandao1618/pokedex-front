import { usePokemon } from "../hooks/usePokemon";

interface PokeCardProps {
  name: string;
}

export function PokeCard({name}: PokeCardProps){
  const {data} = usePokemon(name)

  if(!data) return <p>Not found...</p>

  return (
    <div>
      <h2>
        {data.name}
      </h2>
      <img 
        src={data.image}
      />
    </div>
  )
}