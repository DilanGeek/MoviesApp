import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from '../../interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movies[] = []

  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

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
