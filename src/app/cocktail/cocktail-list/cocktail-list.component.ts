import { Component, OnInit } from '@angular/core';
import { filter, map, delay } from 'rxjs/operators';

import { Cocktail } from 'src/app/_models/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { empty, of, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/_services/firebase.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  filterText = '';
  cocktails: Cocktail[];
  cocktailsAux: Cocktail[];
  loading = false;
  timeout;
  noResults;

  fakeObservable = new Observable<string>();
  constructor(private cocktailService: CocktailService, private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.fbLoadCocktails();


    this.cocktailService.searchCocktail.subscribe(
      (data: string) => {
        this.getCocktailsByTitle(data);
       // this.filterText = data;
       // this.cocktails = data === '' ? this.cocktailsAux : this.cocktails.filter(
       // val => val.title.toLowerCase().startsWith(data.toLowerCase()));
      }, error => {
        console.log(error);
      }
    );
  }

  fbLoadCocktails() {

    this.firebaseService.getCocktails().then( (data) => {
      console.log(data.payload);
      this.cocktails = data.map((item) => {
        console.log(item.payload.doc);
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        }
      });

    }, error => {
      console.log(error);
    });

  } 

  loadCocktails() {

    this.cocktailService.getAll().subscribe( (data) => {
      this.cocktails = data;
      this.cocktailsAux = data;
    }, error => {
      console.log(error);
    });

  }

  getCocktailsByTitle(name: string) {
    this.loading = true;
    this.filterText = name;
    this.cocktailService.getAll().subscribe( (data) => {
      this.cocktails = data.filter(val => val.title.toLowerCase().includes(name.toLowerCase()));

      this.timeout = setTimeout(() => {
        this.loading = true;
        clearTimeout(this.timeout);
        this.loading = false;

      }, 700);
      this.noResults = this.cocktails.length === 0;

    });

  }

}
