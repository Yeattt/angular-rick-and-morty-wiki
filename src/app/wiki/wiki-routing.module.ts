import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WikiHomePageComponent } from './pages/home-page/home-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

const routes: Routes = [
  {
    path: '',
    component: WikiHomePageComponent,
  },
  {
    path: 'character/:id',
    component: CharacterPageComponent,
  },
  {
    path: '**',
    redirectTo: 'wiki'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WikiRoutingModule { }