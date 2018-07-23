import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',3),
        new Ingredient('Apples',10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    importRecipeIngredient(recipeIngredients:Ingredient[]){
        this.ingredients = this.ingredients.concat(recipeIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}