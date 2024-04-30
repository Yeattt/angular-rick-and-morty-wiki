import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WikiHomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: WikiHomePageComponent,
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