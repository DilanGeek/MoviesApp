import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  movieDetail: MovieDetail = {};

  constructor(
    private movieServ: MoviesService,
  ) { }

  ngOnInit() {
    this.movieServ.getMovieDetail(this.id).subscribe((data) => {
      console.log("🚀 ~ file: detail.component.ts ~ line 20 ~ DetailComponent ~ this.movieServ.getMovieDetail ~ data", data)
      this.movieDetail = data
    })

    this.movieServ.getMovieActors(this.id).subscribe((data) => {
      console.log("🚀 ~ file: detail.component.ts ~ line 24 ~ DetailComponent ~ this.movieServ.getMovieCredits ~ data", data)
    })

  }

}
