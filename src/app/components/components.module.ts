import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

// pipies
import { PipesModule } from "../pipes/pipes.module";

// compoenents
import { SlideshowBackdropComponent } from "./slideshow-backdrop/slideshow-backdrop.component";
import { SlideshowPosterComponent } from "./slideshow-poster/slideshow-poster.component";
import { SlideshowPairComponent } from "./slideshow-pair/slideshow-pair.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  entryComponents: [
    DetailComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
