import {Recipe} from './recipe.model'
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    imgPathPotato: string = 'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg';
    imgPathPizza: string = 'http://1.bp.blogspot.com/-oAUdcwxi4Hw/U7kCkE-W9OI/AAAAAAAAUX0/qfBZYYSfvu8/s1600/food-wallpapers-(3).jpg';
    imgPathHotWings: string = 'https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/07/Buffalo-Wings/x.jpg';
    private recipes: Recipe[] = [
        new Recipe(
            'Crisp Crispy Potato',
            'Muy Crispy',
            this.imgPathPotato,
            [
                new Ingredient('Potato',5),
                new Ingredient('Garlic',2)
            ]
        ),
        new Recipe(
            'Tasty Pizza',
            'Ma Ma Mia Pizzeria',
            this.imgPathPizza,
            [
                new Ingredient('Pizza Dough',1),
                new Ingredient('Cheese',3),
                new Ingredient('Olives',32),
                new Ingredient('Pizza Sauce',1)
            ]
        ),
        new Recipe(
            'Hot Wings',
            'Tasty Hot Wings',
            this.imgPathHotWings,
            [
                new Ingredient('Chicken Wings',12),
                new Ingredient('Hot Sauce',1)
            ]
        )
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}