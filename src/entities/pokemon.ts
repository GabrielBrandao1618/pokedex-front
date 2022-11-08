interface PokemonProps {
  name: string;
  image: string;
  types: string[];
  id: string;
}

export class Pokemon {
  private _props: PokemonProps;

  constructor(props: PokemonProps){
    this._props = props;
  }

  get name(){
    return this._props.name;
  }
  get types(){
    return this._props.types;
  }
  get image(){
    return this._props.image;
  }
  get id(){
    return this._props.id;
  }
}