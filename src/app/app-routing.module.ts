import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtFormComponent} from "./componentes/art-form/art-form.component";
import {ArtListComponent} from "./componentes/art-list/art-list.component";

const routes: Routes =  [
  { path: '', redirectTo: '/arts', pathMatch: 'full' },
  { path: 'arts', component: ArtListComponent },
  { path: 'add-art', component: ArtFormComponent },
  { path: 'edit-art/:id', component: ArtFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
