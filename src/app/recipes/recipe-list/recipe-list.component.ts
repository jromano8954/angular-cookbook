import { Component, OnInit, OnDestroy} from '@angular/core';

import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  imgPath: string = 'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg';
  recipes: Recipe[];
  subscription: Subscription;
  //usingRecipe: Recipe;

  constructor(private recipeService:RecipeService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) =>{
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
