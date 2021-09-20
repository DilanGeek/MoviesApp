import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, MovieDetail } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

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
  star = 'star-outline'

  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5,
  };

  constructor(
    private movieServ: MoviesService,
    private modalCtrl: ModalController,
    private dataLocalServ: DataLocalService
  ) { }

  async ngOnInit() {

    this.dataLocalServ.movieExists(this.id).then(exist => this.star = exist ? 'star' : 'star-outline');

    this.movieServ.getMovieDetail(this.id).subscribe((data) => {
      this.movieDetail = data
    })

    this.movieServ.getMovieActors(this.id).subscribe((data) => {
      this.actors = data.cast
    })

  }

  goBack = () => this.modalCtrl.dismiss()

  addFavorite = () => {
    const exist = this.dataLocalServ.saveMovie(this.movieDetail);
    this.star = exist ? 'star' : 'star-outline';
  }
}
