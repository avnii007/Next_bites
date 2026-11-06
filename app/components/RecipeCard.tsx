import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "16px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
      <div style={{ fontSize: "48px", textAlign: "center" }}>{recipe.emoji}</div>
      <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{recipe.title}</h3>
      <div style={{ display: "flex", gap: "8px", fontSize: "0.875rem", color: "#6b7280" }}>
        <span>⏱ {recipe.minutes} min</span>
        <span>•</span>
        <span>{recipe.difficulty}</span>
        <span>•</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}