export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  prepTime: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    prepTime: "35 min",
    difficulty: "Medium",
    image: "🍕",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil, salt"
    ],
    steps: [
      "Heat the oven as hot as it goes.",
      "Stretch the dough and spread sauce.",
      "Tear mozzarella over the top.",
      "Bake 7 to 9 minutes until charred.",
      "Finish with basil and salt."
    ]
  },
  // Add ingredients and steps for all your other recipes here...
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}