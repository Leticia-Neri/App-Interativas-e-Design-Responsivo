import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';




@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  jogos = new Array<Jogo>();
  curJogo?: Jogo;

  constructor() {
    const battleflied = new Jogo('Battleflied', 'EA', 'multi', 5 );
    this.jogos.push(battleflied);

    const gta = new Jogo('Gta', 'EA', 'multi', 6);
    this.jogos.push(gta);


  }

  ngOnInit(): void {
  }

  selectJogo(jogo: Jogo){
    this.curJogo = jogo;
  }

  newJogo(){
    this.curJogo = new Jogo('', '', '', 0);
  }

  save(){
    if(this.curJogo){
      this.jogos.push(this.curJogo);
      this.curJogo = undefined;
    }
  }

  cancel(){
    this.curJogo = undefined;
  }

  remove(pos: number){
    this.jogos.splice(pos, 1);
  }


}
