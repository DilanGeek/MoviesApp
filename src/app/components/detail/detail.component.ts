import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, MovieDetail } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  movieDetail: MovieDetail = {};
  actors: Cast[] = [];
  hideText = 150;

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5,
  };

  constructor(
    private movieServ: MoviesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.movieServ.getMovieDetail(this.id).subscribe((data) => {
      this.movieDetail = data
    })

    this.movieServ.getMovieActors(this.id).subscribe((data) => {
      console.log("🚀 ~ file: detail.component.ts ~ line 24 ~ DetailComponent ~ this.movieServ.getMovieCredits ~ data", data)
      this.actors = data.cast
    })

  }

  goBack = () => this.modalCtrl.dismiss()

  addFavorite = () => {
    console.log('favorite')
  }
}
