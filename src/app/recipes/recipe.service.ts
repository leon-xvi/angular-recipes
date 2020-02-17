import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Pot Pie',
      'A delicious southern classic',
      'https://www.onceuponachef.com/images/2017/10/Chicken-Pot-Pie-2.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('pot', 1),
        new Ingredient('pie', 1)
      ]
    ),
    new Recipe(
      'Mashed Potatoes',
      "Who doesn't love them?",
      'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/6d5b546c-c322-4025-98ec-1bb1556fa7ad.jpg',
      [
        new Ingredient('potatoes', 5),
        new Ingredient('butter', 2),
        new Ingredient('garlic', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
