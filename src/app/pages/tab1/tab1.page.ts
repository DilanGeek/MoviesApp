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

    this.loadPopular();
  }

  loadPopular = () => {
    this.movieServ.getPopular().subscribe((data) => {
      const tempArray = [...this.popularMovies, ...data.results];
      this.popularMovies = tempArray;
    })
  }

  loadMore = () => {
    this.loadPopular();
  }


}
