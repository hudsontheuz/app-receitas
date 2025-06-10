import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostList } from "./pages/PostList";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona "/" para "/post" */}
        <Route path="/" element={<Navigate to="/post" />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
