import { NavLink } from "react-router-dom";
function ProductNav() {
  return (
    <nav className="p-10 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-5">Cafe Menu</h2>
      <ul className="w-full flex flex-col gap-5">
        <li>
          <NavLink
            to="/products/recommended"
            value="recommended"
            className={({ isActive }) =>
              isActive
                ? "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer bg-Mocha-light text-white transition-all"
                : "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
            }
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/coffee"
            value="coffee"
            className={({ isActive }) =>
              isActive
                ? "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer bg-Mocha-light text-white transition-all"
                : "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
            }
          >
            Coffee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/tea"
            value="tea"
            className={({ isActive }) =>
              isActive
                ? "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer bg-Mocha-light text-white transition-all"
                : "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
            }
          >
            Tea
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/pastries"
            value="pastries"
            className={({ isActive }) =>
              isActive
                ? "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer bg-Mocha-light text-white transition-all"
                : "w-full flex items-center justify-start px-5 py-3 rounded shadow-md cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
            }
          >
            Pastries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProductNav;
