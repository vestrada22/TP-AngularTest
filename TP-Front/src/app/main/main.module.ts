import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { MoviePosterGridComponent } from './components/movie-poster-grid/movie-poster-grid.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MaterialModule } from '../material/material.module';
import { CharacterComponent } from './pages/character/character.component';
import { PipesModule } from './pipes/pipes.module';
import { MoviesComponent } from './pages/movies/movies.component';


@NgModule({
  declarations: [
    MainComponent,
    CharactersComponent,
    MoviePosterGridComponent,
    CharacterCardComponent,
    CharacterComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MaterialModule,
    PipesModule
  ]
})
export class MainModule { }
