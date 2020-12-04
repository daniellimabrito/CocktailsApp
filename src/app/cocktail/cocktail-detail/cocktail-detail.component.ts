import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/_models/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
cocktail: Cocktail;
  constructor(private cocktailService: CocktailService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
 /*
    this.route.data.subscribe(data => {
      this.cocktail = data['cocktail'];
    });
*/
    this.loadCocktail();
  }

  loadCocktail() {
    this.cocktailService.getById(this.route.snapshot.params.id).subscribe((data: Cocktail) => {
      this.cocktail = data;
    }, error => {
      console.log(error);
    });
  }
  back(): void {
    this.location.back();
}

}
