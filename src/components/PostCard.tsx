import { Card, CardContent, Typography } from "@mui/material";
import type { Post } from "../types";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ marginBottom: 2, cursor: "pointer" }}
      onClick={() => navigate(`/dados/${post.id}`)}
    >
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </Card>
  );
}
