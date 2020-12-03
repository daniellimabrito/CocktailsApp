import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.css']
})
export class CocktailFilterComponent implements OnInit {

  @Output() searchCocktail = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onSearchChange(val: string) {
   // console.log(val);
    this.searchCocktail.emit(val);

  }

}
