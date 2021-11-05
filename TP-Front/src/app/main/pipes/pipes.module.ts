import { NgModule } from '@angular/core';
import { PosterPipe } from './poster.pipe';



@NgModule({
  declarations: [
    PosterPipe
  ],
  exports: [
    PosterPipe
  ]
})
export class PipesModule { }
