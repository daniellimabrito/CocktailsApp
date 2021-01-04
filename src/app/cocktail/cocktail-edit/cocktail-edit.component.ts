import { Component, OnInit } from '@angular/core';
import { Form } from "@angular/forms";
import { Location } from '@angular/common';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from 'src/app/_models/cocktail';


@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  cocktail: Cocktail;
  selectedDrink :  string;
  typesDrink = [
    {id: "alchool", description: "alchool"},
    {id: "Non-alchool", description: "Non-alchool"}

];

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.loadCocktail();
  }

  loadCocktail() {
    this.cocktailService.getById(this.route.snapshot.params.id).subscribe((data) => {
      this.cocktail = data;
      this.selectedDrink = data.type;
      console.log(this.selectedDrink);
    }, error => { console.log(error) });

  }

  selectedType(){

  }

  onSubmit(form) {
    console.log(form.value);
  }

  back(): void {
    this.location.back();
}

}
