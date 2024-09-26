import { NavLink } from "react-router-dom";
import { FaHome, FaPhone, FaBookmark } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { MdWorkspacesFilled, MdEvent } from "react-icons/md";

function NavBar() {
  return (
    <nav>
      <ul className="list-none gap-5 flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <FaHome className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <MdRestaurantMenu className="mr-2" />
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <MdWorkspacesFilled className="mr-2" />
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <FaBookmark className="mr-2" /> Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <MdEvent className="mr-2" /> Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
                : "text-md text-Mocha hover:text-Mocha-light transition-all flex items-center justify-center"
            }
          >
            <FaPhone className="mr-2" />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
