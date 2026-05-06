import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";
import AppLayout from "./pages/AppLayout";
import CreatorProfile from "./components/Creators/CreatorProfile";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="creators" element={<CreatorsPage />} />
            <Route path="/creatorProfile/:id" element={<CreatorProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
