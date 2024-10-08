import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import {
  FaHome,
  FaPhone,
  FaBookmark,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { MdWorkspacesFilled, MdEvent } from "react-icons/md";

function Footer() {
  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/BrewYourDayCafe",
      icon: <FaFacebookSquare />,
    },
    {
      name: "Twitter",
      link: "https://www.x.com/BrewYourDayCafe",
      icon: <FaTwitterSquare />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/brewyourdaycafe",
      icon: <FaInstagramSquare />,
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-20 flex md:flex-row flex-col items-center justify-around border-t-2 border-gray-200 z-50">
      <div className="flex flex-col items-center justify-center gap-3 w-[500px]">
        <Logo size="80" />
        <span className="text-Mocha font-bold text-2xl">BYD Cafe</span>
        <span className="text-Mocha font-medium text-center italic">
          &copy; {currentYear} Brew Your Day. All rights reserved.
        </span>
      </div>
      <div className="flex flex-col md:flex-row text-center ml-0 md:ml-20 md:text-left mt-10 md:mt-0 gap-20">
        <div className="flex flex-col gap-3 w-40">
          <span className="text-Mocha font-bold mb-3">Contact Us</span>
          <Link
            to="mailto:info@brewyourday.com"
            className="text-Mocha font-medium hover:text-Mocha-light underline transition-all"
          >
            info@brewyourday.com
          </Link>
          <Link
            to="tel:0716164951"
            className="text-Mocha font-medium hover:text-Mocha-light underline transition-all"
          >
            +27 71 616 4951
          </Link>
          <Link
            to="https://maps.app.goo.gl/9mEib7w9U3RXwWps7"
            className="text-Mocha font-medium hover:text-Mocha-light underline transition-all"
          >
            Cleveland St, Boston, Cape Town, 7530
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col items-center md:items-start gap-3 w-40">
            <span className="text-Mocha font-bold mb-3">Follow Us</span>
            {socials.map((social, index) => (
              <li key={index}>
                <Link
                  to={social.link}
                  className="flex items-center justify-center gap-3 text-Mocha font-medium hover:text-Mocha-light underline transition-all"
                >
                  {social.icon} {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col items-center md:items-start gap-3 w-40">
            <span className="text-Mocha font-bold mb-3">Quick Links</span>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/"
                className="flex items-center justify-center gap-3"
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/products"
                className="flex items-center justify-center gap-3"
              >
                <MdRestaurantMenu />
                Products
              </NavLink>
            </li>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/services"
                className="flex items-center justify-center gap-3"
              >
                <MdWorkspacesFilled />
                Services
              </NavLink>
            </li>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/bookings"
                className="flex items-center justify-center gap-3"
              >
                <FaBookmark />
                Bookings
              </NavLink>
            </li>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/events"
                className="flex items-center justify-center gap-3"
              >
                <MdEvent />
                Events
              </NavLink>
            </li>
            <li className="text-Mocha font-medium hover:text-Mocha-light underline transition-all">
              <NavLink
                to="/contact"
                className="flex items-center justify-center gap-3"
              >
                <FaPhone />
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
