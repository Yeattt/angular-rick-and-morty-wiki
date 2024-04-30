import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character, SearchResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  private readonly apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<SearchResponse> {
    const url: string = `${this.apiUrl}/character`;

    return this.http.get<SearchResponse>(url);
  };
}