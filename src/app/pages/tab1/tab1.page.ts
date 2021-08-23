import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movies[] = [];
  popularMovies: Movies[] = [];

  constructor(
    private movieServ: MoviesService,
  ) { }

  ngOnInit() {
    this.movieServ.getFeature().subscribe((data) => {
      this.recentMovies = data.results;
    });

    this.movieServ.getPopular().subscribe((data) => {
      console.log("🚀 ~ file: tab1.page.ts ~ line 25 ~ Tab1Page ~ this.movieServ.getPopulars ~ data", data)
      this.popularMovies = data.results;
    })
  }


}
