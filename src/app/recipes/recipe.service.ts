import {Recipe} from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    imgPath: string = 'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg';
    private recipes: Recipe[] = [
        new Recipe('A test recipe','This is a test',this.imgPath),
        new Recipe('A test recipe','This is a test',this.imgPath),
        new Recipe('A test recipe','This is a test',this.imgPath),
        new Recipe('A test recipe','This is a test',this.imgPath)
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}