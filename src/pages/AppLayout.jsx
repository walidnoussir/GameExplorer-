import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />
      <main className="bg-slate-900 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
