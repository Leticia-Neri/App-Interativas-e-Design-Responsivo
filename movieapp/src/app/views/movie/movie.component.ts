import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();
  curMovie?: Movie;

  constructor() {
    const matrix = new Movie('Matrix', 5);
    this.movies.push(matrix);

    const batman = new Movie('The Batman', 2);
    this.movies.push(batman);

    const rambo = new Movie('Rambo', 4);
    this.movies.push(rambo);
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie){
    this.curMovie = movie;
  }

  newMovie(){
    this.curMovie = new Movie('', 0);
  }

  save(){
    if(this.curMovie){
      this.movies.push(this.curMovie);
      this.curMovie = undefined;
    }
  }

  cancel(){
    this.curMovie = undefined;
  }

  remove(pos: number){
    this.movies.splice(pos, 1);
  }

}
