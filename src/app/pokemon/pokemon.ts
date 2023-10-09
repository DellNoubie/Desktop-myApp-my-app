
2
3
4
5
6
7
8
9
export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor(name:string="Entrer un nom...",
  hp:number=100,
  cp:number=10,
  picture:string="https://www.pokemon.com/fr/pokedex/xxx.png",
  types:string[]=["Normal"],
  created:Date=new Date()){
    this.name=name;
    this.hp=hp;
    this.cp=cp;
    this.picture=picture;
    this.types=types;
    this.created=created;
  }
}
