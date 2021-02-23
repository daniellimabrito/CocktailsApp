import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cocktail } from '../_models/cocktail';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  searchCocktail = new EventEmitter<string>();


constructor(private db: AngularFirestore) { }

createCocktail(cocktail: Cocktail){
  return this.db.collection('cocktails').add(cocktail);
}

getCocktails1() {

  return this.db.collection('cocktails').snapshotChanges();
}

getCocktails(){
  return new Promise<any>((resolve, reject) => {
    this.db.collection('/cocktails').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}

fbGetCocktails() {
  return this.db.collection('cocktails').snapshotChanges();
}

updateCocktail1(cocktailKey, value){
  value.title = value.title;
  return this.db.collection('cocktails').doc(cocktailKey).set(value);
}

updateCocktail(cocktailId: string, cocktail: Cocktail) {
  return  this.db.doc('cocktails/' + cocktailId).update(cocktail);
}

deleteCocktail1(cocktailKey){
  return this.db.collection('cocktails').doc(cocktailKey).delete();
}

deleteCocktail(cocktailId: string) {
  return  this.db.doc('cocktails/' + cocktailId).delete();
}

searchCocktails(searchValue: string) {
  let val = this.db.collection('cocktails', ref => ref.where('title', '>=', searchValue)
    .where('title', '<=', searchValue  + '\uf8ff'))
    .snapshotChanges();

    let val1 = this.db.firestore.collection('cocktails').where('title', '>=', searchValue).where('title', '<=', searchValue  + '\uf8ff');

    return (val1);
}


}
