import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.css']
})
export class CocktailFilterComponent implements OnInit {

  // @Output() searchCocktail = new EventEmitter<string>();


  constructor( private cocktailService: CocktailService ) { }

  ngOnInit() {
  }

  onSearchChange(val: string) {
   // console.log(val);
    this.cocktailService.searchCocktail.emit(val);

  }

}
