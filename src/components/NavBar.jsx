import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 lg:px-12 py-2 shadow-2xl shadow-slate-900">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="flex items-center lg:gap-8 gap-4 text-white">
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
