import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Meal } from "../types";
import { Container, Typography } from "@mui/material";
import { PostCard } from "../components/PostCard";

export function MealList() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    api.get("/search.php?f=a").then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Receitas
      </Typography>
      {meals.map((meal) => (
        <PostCard key={meal.idMeal} post={meal} />
      ))}
    </Container>
  );
}
