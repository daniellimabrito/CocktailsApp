import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cocktail } from '../_models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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


}
