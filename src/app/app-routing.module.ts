import { CharacterComponent } from './characters/character/character.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    component: CharactersComponent
  },
  {
    path: 'personaje/:id',
    component: CharacterComponent
  },
  {
    path: 'ubicacion',
    component: LocationsComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path:'**',
    redirectTo:'personajes'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
