import { Component, OnInit } from '@angular/core';

import { WikiService } from '../../services/wiki.service';
import { Character, SearchResponse } from '../../interfaces';

@Component({
  selector: 'wiki-home-page',
  templateUrl: './home-page.component.html',
  styles: ``
})
export class WikiHomePageComponent implements OnInit {
  public characters: Character[] = [];

  constructor(
    private wikiService: WikiService,
  ) { }

  ngOnInit(): void {
    this.wikiService.getCharacters()
      .subscribe((response: SearchResponse) => {
        const characters: Character[] = response.results;
        
        this.characters = characters;
      });

    console.log(this.characters);
  }
}
