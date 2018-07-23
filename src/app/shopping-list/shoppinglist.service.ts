import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes',3),
        new Ingredient('Apples',10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
    }
}