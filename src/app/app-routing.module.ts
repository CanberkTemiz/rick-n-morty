import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { path: "character", component: CharacterComponent },
  { path: "character/detail/:id", component: CharacterDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

