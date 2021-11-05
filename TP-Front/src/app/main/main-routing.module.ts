import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuardGuard } from './guards/roles-guard.guard';
import { MainComponent } from './main.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'characters', component: CharactersComponent,
        data: {
          role: 'admin'
        },
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'character/:id', component: CharacterComponent,
        data: {
          role: 'admin'
        },
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'movies', component: MoviesComponent,
        data: {
          role: 'user'
        },
        canActivate: [RolesGuardGuard]
      },
      {
        path: '**', redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
