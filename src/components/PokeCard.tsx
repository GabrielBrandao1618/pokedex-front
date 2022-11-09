import { usePokemon } from "../hooks/usePokemon";

interface PokeCardProps {
  name: string;
}

export function PokeCard({name}: PokeCardProps){
  const {data} = usePokemon(name)

  if(!data) return <p>Not found...</p>

  return (
    <div className="m-1 w-full max-w-[160px] bg-gray-800 rounded-xl">
      <img 
        src={data.image}
        className="w-full h-auto"
      />
      <div className="px-2 flex flex-col gap-1">
        <h3 className="text-gray-200 text-xl font-semibold">
          {data.name}
        </h3>
        <div className="flex gap-1">
          {data.types.map(type => {
            return (
              <span className="bg-blue-700 text-blue-100 rounded block p-1">
                {type}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}