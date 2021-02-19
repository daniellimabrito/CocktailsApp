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
  items: Array<any>;
  name_filtered_items: Array<any>;
  filterCocktails : Array<any> = []; //Cocktail[];

  fakeObservable = new Observable<string>();
  constructor(private cocktailService: CocktailService, private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.getData();

    this.fbLoadCocktails();

    this.firebaseService.searchCocktail.subscribe((data: string) => {
      this.fbGetCocktailsByTitle(data);
    }, error => console.log(error));

/*
    this.cocktailService.searchCocktail.subscribe(
      (data: string) => {
        this.getCocktailsByTitle(data);
      }, error => {
        console.log(error);
      }
    );

    */
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

  fbGetCocktailsByTitle(name: string) {
    this.loading = true;
    this.filterText = name;

    

    let aaa = this.firebaseService.searchCocktails(name).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
         // console.log(doc.id, " => ", doc.data());
/*
          var obj =  {
            "id" : doc.id,
            "title" : doc.data().title,
            "description" : doc.data().description,
            "type" : doc.data().type,
            "imageUrl" : doc.data().imageUrl,          
          };

*/
          let obj : Cocktail = { 
          id : parseInt(doc.id),
          title : doc.data().title,
          description : doc.data().description,
          type : doc.data().type,
          imageUrl : doc.data().imageUrl,
          };

         // console.log(obj);

       //   this.filterCocktails.push(obj);
        
      });

      console.log(aaa);

    //this.cocktails = this.filterCocktails[0];
  });


/*
    this.firebaseService.searchCocktails(name).subscribe( data => {
      
let abc = data.filter((x) => { x.payload.doc.id.startsWith(name); });

      let test = data.map((item) => {
       // console.log(item.payload.doc);
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        }//.filter(x => x.payload.doc.data.return..startsWith(name));
      });
    // console.log(abc);
    //  this.cocktails = (data as Cocktail[]).filter(val => val.title.includes(name));


      this.timeout = setTimeout(() => {
        this.loading = true;
        clearTimeout(this.timeout);
        this.loading = false;

      }, 700);
      this.noResults = this.cocktails.length === 0;

    });

    */

  }

  getData(){
    this.firebaseService.fbGetCocktails()
    .subscribe(result => {
      this.items = result;
      this.name_filtered_items = result;
    })
  }

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
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
