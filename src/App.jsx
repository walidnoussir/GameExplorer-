import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="creators" element={<CreatorsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
