import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ size = "10" }) {
  const logoStyle = `fill-Mocha-dark hover:fill-Mocha-light size-${size}`;
  return (
    <Link to="/" className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={logoStyle}
      >
        <path d="M13 24h-7c-1.857-3.32-3.742-8.431-4-16h15c-.255 7.504-2.188 12.781-4 16zm5.088-14c-.051.688-.115 1.355-.192 2h1.707c-.51 1.822-1.246 3.331-2.539 4.677-.283 1.173-.601 2.25-.939 3.229 3.261-2.167 5.556-6.389 5.875-9.906h-3.912zm-7.714-3.001c4.737-4.27-.98-4.044.117-6.999-3.783 3.817 1.409 3.902-.117 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099z" />
      </svg>
    </Link>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
