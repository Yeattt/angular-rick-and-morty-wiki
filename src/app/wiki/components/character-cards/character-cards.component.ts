import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'wiki-character-cards',
  templateUrl: './character-cards.component.html',
  styles: ``
})
export class CharacterCardsComponent {
  @Input()
  public character!: Character;
}
