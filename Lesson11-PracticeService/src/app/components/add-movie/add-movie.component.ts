import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.class';
import { MovieService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  addMovie(name:string,link:string,author:string){
    let movie = new Movie(0,name,link,author);
    this._movieService.addMovie(movie);
  }
}
