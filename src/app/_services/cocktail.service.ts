import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Cocktail } from '../_models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  baseUrl = environment.apiUrl;

  emmiterCocktailsList = new EventEmitter<Cocktail[]>();
  searchCocktail = new EventEmitter<string>();

constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Cocktail[]>(this.baseUrl + 'cocktails');
  }

  getById(id: number) {
    return this.http.get<Cocktail>(this.baseUrl + 'cocktails/' + id);
  }

  addItem(cocktail: Cocktail) {
    return this.http.post<Cocktail>(this.baseUrl + 'cocktails', cocktail);
  }

  editItem(cocktail: Cocktail) {
    console.log(cocktail);
    return this.http.put<Cocktail>(this.baseUrl + 'cocktails/' + cocktail.id, cocktail);
  }
}
