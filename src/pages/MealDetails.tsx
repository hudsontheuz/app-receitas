import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import type { Meal } from "../types";
import { Container, Typography } from "@mui/material";

export function MealDetails() {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    if (id) {
      api.get(`/lookup.php?i=${id}`).then((res) => {
        const found = res.data.meals?.[0];
        setMeal(found);
      });
    }
  }, [id]);

  if (!meal) return <Typography>Carregando...</Typography>;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {meal.strMeal}
      </Typography>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {meal.strInstructions}
      </Typography>
    </Container>
  );
}
