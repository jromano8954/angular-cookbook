import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  imgPath: string = 'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg';
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is a test',this.imgPath),
    new Recipe('A test recipe','This is a test',this.imgPath)
  ];

  constructor() { }

  ngOnInit() {
  }

}
