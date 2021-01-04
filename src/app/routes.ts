import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail/cocktail-detail/cocktail-detail.component';
import { CocktailEditComponent } from './cocktail/cocktail-edit/cocktail-edit.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'cocktails',
      children: [
          { path: '', component: CocktailListComponent },
          { path: ':id', component: CocktailDetailComponent },
          { path: ':id/edit', component: CocktailEditComponent },

      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}

];
