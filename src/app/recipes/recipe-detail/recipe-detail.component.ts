import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeInfo:Recipe;
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList(){
    this.shoppingListService.importRecipeIngredient(this.recipeInfo.ingredients);
  }

}
