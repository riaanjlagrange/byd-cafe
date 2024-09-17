import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="p-20 flex justify-between items-center border-t-2 border-gray-200 z-50">
      <Logo size="20" />
      <nav className="flex flex-col">
        <ul>
          <li className="mb-1 text-Mocha font-medium">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <NavLink to="/products/recommended">Products</NavLink>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
