import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';

// services
import { MoviesService } from '../../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textSearch: string = '';
  movies: Movies[] = [];
  ideas: string[] = ['Spiderman', 'Avengers', 'Lord Of The Rings', 'Venom'];
  searching: boolean = false;

  constructor(
    private moviesSrv: MoviesService,
    private modalCtrl: ModalController
  ) { }

  onSearchChange = (e) => {
    const value = e.detail.value;

    if (value.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }

    this.searching = true;
    this.moviesSrv.findMovieByName(value).subscribe((data) => {
      this.movies = data["results"];
      this.searching = false;
    })
  }


  showMovieDetail = async (id: string) => {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id: id
      }
    })
    modal.present()
  }
}
