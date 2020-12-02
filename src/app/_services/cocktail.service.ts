import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Cocktail } from '../_models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Cocktail[]>(this.baseUrl + 'cocktails');
  }

  getById(id: number) {
    return this.http.get<Cocktail>(this.baseUrl + 'cocktails/' + id);
  }
}
