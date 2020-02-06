import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Pot Pie', 'A delicious southern classic', 'https://www.onceuponachef.com/images/2017/10/Chicken-Pot-Pie-2.jpg'),
    new Recipe('Mashed Potatoes', 'Who doesn\'t love them?', 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/6d5b546c-c322-4025-98ec-1bb1556fa7ad.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
