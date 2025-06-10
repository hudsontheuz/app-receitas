import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type { Meal } from "../types";

interface Props {
  post: Meal;
}

export function PostCard({ post }: Props) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          <Link to={`/dados/${post.idMeal}`} style={{ textDecoration: "none" }}>
            {post.strMeal}
          </Link>
        </Typography>
        <Typography variant="body2">
          {post.strInstructions.substring(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  );
}
