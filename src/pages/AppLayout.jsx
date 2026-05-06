import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import GameDetailsPage from "./GameDetailsPage";

function AppLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <GameDetailsPage/>
      <main className="h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
