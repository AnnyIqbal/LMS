import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  MenuIcons: string[] = ['MENU', 'HOME', 'SEARCH', 'USER', 'BOOK', 'ISSUE A BOOK', 'RATE A BOOK', 'BOOK SHELF', 'LIBRARY', 'LOCATOR'];
  icons: string[] = [
    'home', 'search', 'person', 'book', 'add_shopping_cart', 'favorite', 'shopping_cart', 'account_balance', 'location_on'
  ];
}
