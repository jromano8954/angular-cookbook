import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeInfo:Recipe;
  id: number;
  
  constructor(private shoppingListService:ShoppingListService,
              private route:ActivatedRoute, 
              private recipeService:RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeInfo = this.recipeService.getRecipeEle(this.id);
      }
    );
  }

  toShoppingList(){
    this.shoppingListService.importRecipeIngredient(this.recipeInfo.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.removeRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
