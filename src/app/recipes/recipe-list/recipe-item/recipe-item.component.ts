import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeInfo:Recipe;
  @Input() index:number;
  //@Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

}
