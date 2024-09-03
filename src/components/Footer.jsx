import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-Beige p-20 flex justify-between items-center z-50">
      <Logo size="20" />
      <nav className="flex flex-col">
        <ul>
          <li className="mb-1 text-Mocha font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <Link to="/products">Products</Link>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <Link to="/services">Services</Link>
          </li>
          <li className="mb-1 text-Mocha font-medium">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
