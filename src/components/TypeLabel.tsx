import clsx from 'clsx'

interface TypeLabelProps {
  name: string;
}

export function TypeLabel({name}: TypeLabelProps){
  return (
    <span className={clsx(
      'text-3xl text-gray-100 font-bold bg-opacity-30 rounded px-2 py-1',
      {
        'bg-red-500 text-red-700': name === 'fire',
        'bg-blue-500 text-blue-700': name === 'water',
        'bg-green-500 text-green-700': name === 'grass',
        'bg-lime-500 text-white': name === 'bug',
        'bg-amber-200 text-black': name === 'normal',
        'bg-blue-700 text-blue-900': name === 'dragon',
        'bg-orange-900 text-white': name === 'ground',
        'bg-gray-700 text-white': name === 'rock',
        'bg-purple-700 text-white': name === 'fairy',
        'bg-gray-100 text-gray-900': name === 'steel',
        'bg-blue-300 text-black': name === 'flying',
        'bg-red-800 text-white': name === 'fighting',
        'bg-blue-400 text-blue-900': name === 'ice',
        'bg-rose-600 text-white': name === 'psychic',
        'bg-gray-800 text-white': name === 'dark',
        'bg-blue-800 text-white': name === 'ghost',
        'bg-orange-500 text-white': name === 'electric',
        'bg-purple-800 text-white': name === 'poison',
      }
    )}>
      {name}
    </span>
  )
}