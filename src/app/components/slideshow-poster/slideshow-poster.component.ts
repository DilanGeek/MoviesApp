import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movies[] = []

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.movies)
  }

  showDetails = async (id: number) => {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id: id
      }
    })
    modal.present()
  }

}
