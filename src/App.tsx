import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MealList } from "./pages/MealList";
import { MealDetails } from "./pages/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<MealList />} />
        <Route path="/dados/:id" element={<MealDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
