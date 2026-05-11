import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import CreatorsPage from "./pages/CreatorsPage";
import AppLayout from "./pages/AppLayout";
import CreatorProfile from "./components/Creators/CreatorProfile";
import GameDetailsPage from "./pages/GameDetailsPage";
import GameDevelopersPage from "./pages/GameDevelopersPage";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="/games/:game_id" element={<GameDetailsPage />} />
            <Route
              path="/games/:game_id/developers-team"
              element={<GameDevelopersPage />}
            />
            <Route path="creators" element={<CreatorsPage />} />
            <Route path="/creatorProfile/:id" element={<CreatorProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <GameDevelopersPage/> */}
    </div>
  );
}

export default App;
