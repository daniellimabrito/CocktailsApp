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
    

    let cocktail: Cocktail;

    this.cocktail.id = this.route.snapshot.params.id;
    this.cocktail.description = form.value.title;
    this.cocktail.type = form.value.type;
    this.cocktail.imageUrl = form.value.imageUrl;

    this.cocktailService.editItem(this.cocktail).subscribe( next => {
      alert("Cocktail updated successfully!");
      window.location.href = '/home';
    }, error => {
      console.log(error);
    }); 
  }

  back(): void {
    this.location.back();
}

}
