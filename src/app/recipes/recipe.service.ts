import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Pot Pie',
      'A delicious southern classic',
      'https://www.onceuponachef.com/images/2017/10/Chicken-Pot-Pie-2.jpg'
    ),
    new Recipe(
      'Mashed Potatoes',
      "Who doesn't love them?",
      'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/6d5b546c-c322-4025-98ec-1bb1556fa7ad.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
