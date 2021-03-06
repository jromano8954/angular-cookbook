import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppinglistService.startedEditing.next(index);
  }

}
