import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostList } from "./pages/PostList";
import { PostDetails } from "./pages/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
