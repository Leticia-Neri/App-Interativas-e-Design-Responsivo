import { Injectable } from '@angular/core';

import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogos = new Array<Jogo>();
  private idGerado = 1;

  constructor() { }

  inserir(jogo: Jogo){
    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado++;

    this.salvar();
  }

  listar(){
    this.carregar();
    return this.jogos;
  }

  remover(id?: number){
    this.jogos = this.jogos.filter((jogo) => {
      return id !== jogo.id;
    });
    this.salvar();
    /*
    for(let i = 0; i < this.jogos.length; i++){
      if(id == this.jogos[i].id){
        this.jogos.splice(i, 1);
        break;
      }
    }
    */
  }

  editar(jogo: Jogo){
   const indice =  this.jogos.findIndex((j) =>{
      return j.id === jogo.id;
    });

    if(indice >= 0){
      this.jogos[indice] = jogo;
    }
    this.salvar();
  }

  salvar(){
    localStorage.setItem('idGerado', this.idGerado.toString());
    localStorage.setItem('jogos', JSON.stringify(this.jogos));

  }

  carregar(){
    const idGerado = localStorage.getItem('idGerado');
    if(idGerado){
      this.idGerado = Number(idGerado);
    }

    const jogosSlavos = localStorage.getItem('jogos');
    if(jogosSlavos){
      this.jogos = JSON.parse(jogosSlavos);
    }
  }
}
