import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

type MealDetails = {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
};

export function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<MealDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!meal) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Receita não encontrada.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      {/* Botão de Voltar */}
      <Box sx={{ mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Voltar
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight="bold">
        {meal.strMeal}
      </Typography>
      <Typography variant="body1">{meal.strInstructions}</Typography>
    </Container>
  );
}
