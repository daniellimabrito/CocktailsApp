import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/_models/cocktail';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { CocktailEditComponent } from '../cocktail-edit/cocktail-edit.component';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css']
})
export class CocktailCardComponent implements OnInit {
@Input() cocktail: Cocktail;

  constructor(private alertify: AlertifyService, private cocktailService: CocktailService) { }

  ngOnInit() {
  }

  deleteCocktail(id: number) {
    this.alertify.confirm('Are you sure you want to delete this item?', () => {

      this.cocktailService.deleteItem(id).subscribe(() => {
        this.alertify.success('Cocktail has been deleted');
      }, () => {
        this.alertify.error('Failed to delete Cocktail');
      });
    });
  }

}
