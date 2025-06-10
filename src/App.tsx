// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MealList } from "./pages/MealList";
import { MealDetails } from "./pages/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/post" />} />
        <Route path="/post" element={<MealList />} />
        <Route path="/dados/:id" element={<MealDetails />} />
        <Route path="*" element={<Navigate to="/post" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
