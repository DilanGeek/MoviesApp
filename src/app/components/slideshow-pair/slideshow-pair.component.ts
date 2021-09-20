import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pair',
  templateUrl: './slideshow-pair.component.html',
  styleUrls: ['./slideshow-pair.component.scss'],
})
export class SlideshowPairComponent implements OnInit {

  @Input() movies: Movies[] = []
  @Output() loadMore = new EventEmitter()

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spceBetween: -10,
  }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  loadMoreMovies = () => {
    this.loadMore.emit()
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
