import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="logo"
        width={size}
        height={size}
        className="hover:scale-105"
      />
    </Link>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
