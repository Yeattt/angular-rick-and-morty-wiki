import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { WikiService } from '../../services/wiki.service';
import { Character } from '../../interfaces';

@Component({
  selector: 'wiki-character-page',
  templateUrl: './character-page.component.html',
  styles: ``
})
export class CharacterPageComponent implements OnInit {
  public character?: Character;

  constructor(
    private wikiService: WikiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.wikiService.getCharacter(id))
      )
      .subscribe(character => {
        return this.character = character;
      });
  }
}
