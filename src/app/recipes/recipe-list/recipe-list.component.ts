import { Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  imgPath: string = 'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg';
  recipes: Recipe[];
  //usingRecipe: Recipe;

  constructor(private recipeService:RecipeService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
