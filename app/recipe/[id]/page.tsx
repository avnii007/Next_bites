import { notFound } from "next/navigation";
import { getRecipe } from "@/app/data/recipes";
import Link from "next/link";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← All recipes</Link>
      <h1>{recipe.image} {recipe.title}</h1>
      <p>{recipe.cuisine} • {recipe.prepTime} • {recipe.difficulty}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Method</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}