import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="list-none gap-5">
        <li>
          <Link
            to="/"
            className="mr-5 font-bold text-lg text-Mocha hover:text-Mocha-light transition-all"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="mr-5 font-bold text-lg text-Mocha hover:text-Mocha-light transition-all"
          >
            Product
          </Link>
          <Link
            to="/services"
            className="mr-5 font-bold text-lg text-Mocha hover:text-Mocha-light transition-all"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="font-bold text-lg text-Mocha hover:text-Mocha-light transition-all"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
