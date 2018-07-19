import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  shoppingListEnabled = false;
  recipesEnabled = true;

  toggleRecipes(event:boolean){
    this.recipesEnabled = event;
  }
  toggleShoppingList(event:boolean){
    this.shoppingListEnabled = event;
  }
}
