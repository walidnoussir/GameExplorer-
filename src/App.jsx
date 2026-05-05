import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/creators" element={<CreatorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
