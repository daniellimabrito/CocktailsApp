import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CocktailCardComponent } from './cocktail/cocktail-card/cocktail-card.component';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail/cocktail-detail/cocktail-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailFilterComponent } from './cocktail/cocktail-filter/cocktail-filter.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { CocktailEditComponent } from './cocktail/cocktail-edit/cocktail-edit.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent,
      CocktailCardComponent,
      CocktailListComponent,
      CocktailDetailComponent,
      CocktailFilterComponent,
      CocktailEditComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
