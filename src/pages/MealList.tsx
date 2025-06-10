import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";

// Tipo para o que vem da API
type MealFromAPI = {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
};

// Tipo para o que você vai usar no estado
type Meal = {
  id: string;
  title: string;
  instructions: string;
};

export function MealList() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        const mealsData: Meal[] = data.meals.map((meal: MealFromAPI) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          instructions: meal.strInstructions,
        }));
        setMeals(mealsData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Lista de Receitas 🍽️
      </Typography>
      <Grid container spacing={3}>
        {meals.map((meal) => (
          <Grid item xs={12} md={6} key={meal.id}>
            <Link
              to={`/dados/${meal.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {meal.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {meal.instructions.slice(0, 100)}...
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
