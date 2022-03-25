export class Jogo {
  name: string;
  desenvolvedor: string;
  plataforma: string;
  numJog: number;

  constructor(name: string, desenvolvedor: string, plataforma: string, numJog: number){
    this.name = name;
    this.desenvolvedor = desenvolvedor;
    this.plataforma = plataforma;
    this.numJog = numJog;
  }
}
