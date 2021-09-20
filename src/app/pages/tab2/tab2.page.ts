import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';

// services
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textSearch: string = '';
  movies: Movies[] = [];
  ideas: string[] = ['Spiderman', 'Avengers', 'Lord of rigns', 'Venom'];

  constructor(
    private MoviesSrv: MoviesService
  ) { }

  onSearchChange = (e) => {
    const value = e.detail.value;
    this.MoviesSrv.findMovieByName(value).subscribe((data) => {
      this.movies = data["results"];
    })

  }

}
