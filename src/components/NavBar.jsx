import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 px-12 py-4 mb-5 shadow-2xl shadow-slate-900/50">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="flex items-center gap-8 text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/creators">Creators</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
