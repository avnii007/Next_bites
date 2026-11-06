import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div>
        <span>{recipe.image}</span>
        <h3>{recipe.title}</h3>
        <p>{recipe.cuisine}</p>
      </div>
    </Link>
  );
}