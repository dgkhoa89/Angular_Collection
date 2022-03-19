import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieService } from './services/movie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
