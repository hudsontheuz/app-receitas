import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { Post } from "../types";
import { Container, Typography } from "@mui/material";

export function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`).then((res) => setPost(res.data));
    }
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Container>
  );
}
