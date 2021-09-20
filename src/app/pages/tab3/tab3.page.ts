import { Component } from '@angular/core';
import { MovieDetail, Genre } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movies: MovieDetail[] = [];
  genres: Genre[] = [];
  favoriteGenre: any[] = [];

  constructor(
    private dataLocalSrv: DataLocalService,
    private movieSrv: MoviesService
  ) { }


  async ionViewWillEnter() {
    this.movies = await this.dataLocalSrv.loadFavorites()
    this.genres = await this.movieSrv.loadGenres();
    this.moviesByGenre(this.genres, this.movies);
  }

  moviesByGenre = (genres: Genre[], movies: MovieDetail[]) => {
    this.favoriteGenre = [];
    genres.forEach(genre => {
      this.favoriteGenre.push({
        name: genre.name,
        movies: movies.filter(movie => movie.genres.find(genreMovie => genreMovie.id === genre.id))
      })
    })
  }

}
