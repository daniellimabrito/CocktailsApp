import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail/cocktail-detail/cocktail-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: '',
      children: [
          { path: 'cocktails', component: CocktailListComponent },
          { path: 'cocktails/:id', component: CocktailDetailComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}

];
