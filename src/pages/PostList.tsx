import { useEffect, useState } from "react";
import { Post } from "../types";
import { api } from "../services/api";
import { PostCard } from "../components/PostCard";
import { Container, Typography } from "@mui/material";

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Posts
      </Typography>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
}
