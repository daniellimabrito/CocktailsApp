import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/_models/cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css']
})
export class CocktailCardComponent implements OnInit {
@Input() cocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }

}
