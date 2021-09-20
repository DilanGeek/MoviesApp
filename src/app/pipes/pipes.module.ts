import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairPipe } from './pair.pipe';
import { FilterImagePipe } from './filter-image.pipe';


@NgModule({
  declarations: [
    ImagePipe,
    PairPipe,
    FilterImagePipe
  ],
  exports: [
    ImagePipe,
    PairPipe,
    FilterImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
