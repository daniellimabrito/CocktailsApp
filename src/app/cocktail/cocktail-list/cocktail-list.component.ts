import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/_models/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[];
  constructor(private cocktailService: CocktailService) {

  }

  ngOnInit() {
    this.loadCocktails();
  }

  loadCocktails() {

    this.cocktailService.getAll().subscribe( (data) => {
      console.log(data);

      this.cocktails = data;
    }, error => {
      console.log(error);
    });
  }

  onSearchChange(event) {
    console.log(event);
  }

}
