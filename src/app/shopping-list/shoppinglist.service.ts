import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',3),
        new Ingredient('Apples',10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    importRecipeIngredient(recipeIngredients:Ingredient[]){
        this.ingredients = this.ingredients.concat(recipeIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}