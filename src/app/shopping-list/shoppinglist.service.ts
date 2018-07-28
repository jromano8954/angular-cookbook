import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

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
    getIngredient(index:number){
        return this.ingredients[index];
    }
    updateIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    removeIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}