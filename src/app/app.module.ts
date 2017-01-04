import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { LibraryComponent } from './library/library.component';
import { LocatorComponent } from './locator/locator.component';

const routes: Routes =[
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'person', component: UserComponent },
  { path: 'book', component: BookComponent },
  { path: 'add_shopping_cart', component: AddToCartComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'shopping_cart', component: BookShelfComponent },
  { path: 'account_balance', component: LibraryComponent },
  { path: 'location_on', component: LocatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    UserComponent,
    BookComponent,
    AddToCartComponent,
    FavoriteComponent,
    BookShelfComponent,
    LibraryComponent,
    LocatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
