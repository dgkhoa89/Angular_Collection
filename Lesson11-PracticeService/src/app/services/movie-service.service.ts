import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    new Movie(1, "Irishman", "irismand.com", "Russel"),
    new Movie(2, "Hunters", "Reloma", "Ritchz")
  ];

  constructor() { }

  showMovieList() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    var id = 1;
    if (this.movies.length > 0) {
      id = this.movies.sort((a, b) => {
        if (a.id > b.id) return -1;
        else if (a.id < b.id) return 1;
        else return 0;
      })[0].id + 1;
    }
    movie.id = id;
    this.movies.push(movie);
  }
}
