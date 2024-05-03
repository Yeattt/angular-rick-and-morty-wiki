import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiHomePageComponent } from './pages/home-page/home-page.component';
import { WikiRoutingModule } from './wiki-routing.module';
import { CharacterCardsComponent } from './components/character-cards/character-cards.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

@NgModule({
  declarations: [
    WikiHomePageComponent,
    CharacterCardsComponent,
    CharacterPageComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
  ],
})
export class WikiModule { }
