import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <h1>Find your next bite.</h1>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}