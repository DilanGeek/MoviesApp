import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces';

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

  constructor() { }

  ngOnInit() { }

  loadMoreMovies = () => {
    console.log('more movies')
    this.loadMore.emit()
  }

}
