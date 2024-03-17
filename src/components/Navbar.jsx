import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const NavBar = () => {
  return (
    <div className="navbar text-white h-20 flex items-center justify-center">
      <img
        className="w-auto h-20 fixed left-24"
        src="https://eta3n9bentg.exactdn.com/wp-content/uploads/2024/02/cropped-short-logo-1.png?strip=all&lossy=1&ssl=1"
        alt="Logo"
      />
      <nav>
        <ul className="flex m-0 p-0 gap-16 text-xl">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="font-bold"
              className="text-white-500 hover:text-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              activeClassName="font-bold"
              className="text-white-500 hover:text-gray-700"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              activeClassName="font-bold"
              className="text-white-500 hover:text-gray-700"
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="font-bold"
              className="text-white-500 hover:text-gray-700"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
