import { Component, OnInit } from '@angular/core';
import { Form } from "@angular/forms";
import { Location } from '@angular/common';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from 'src/app/_models/cocktail';
import { AlertifyService } from 'src/app/_services/alertify.service';


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

  constructor(private cocktailService: CocktailService, private route: ActivatedRoute, private location: Location, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCocktail();
  }

  loadCocktail() {
    this.cocktailService.getById(this.route.snapshot.params.id).subscribe((data) => {
      this.cocktail = data;
      this.selectedDrink = data.type;
      console.log(this.selectedDrink);
    }, error => { this.alertify.error(error) });

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
      
        this.alertify.success('Cocktail updated successfully!');
     
    }, error => {
      this.alertify.error(error);
    }, () => {
     
      setTimeout(() => {
        //this.alertify.success('Cocktail updated successfully!');
        window.location.href = '/home';
      }, 3000);      
     
      //

    }
    ); 
  }

  back(): void {
    this.location.back();
}

}
