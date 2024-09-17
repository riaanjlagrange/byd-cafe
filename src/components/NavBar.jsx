import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="list-none gap-5 flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all"
                : "text-md text-Mocha hover:text-Mocha-light transition-all"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/recommended"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all"
                : "text-md text-Mocha hover:text-Mocha-light transition-all"
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all"
                : "text-md text-Mocha hover:text-Mocha-light transition-all"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all"
                : "text-md text-Mocha hover:text-Mocha-light transition-all"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
