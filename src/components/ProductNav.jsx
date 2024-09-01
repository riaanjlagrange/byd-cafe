import PropTypes from "prop-types";

function ProductNav({ onData }) {
  return (
    <nav className="p-10 flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-5">Cafe Menu</h2>
      <ul className="w-full">
        <li>
          <button
            value="recommended"
            onClick={onData}
            className="w-full flex items-center justify-start px-5 py-3 rounded shadow mb-1 cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
          >
            Recommended
          </button>
        </li>
        <li>
          <button
            value="coffee"
            onClick={onData}
            className="w-full flex items-center justify-start px-5 py-3 rounded shadow mb-1 cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
          >
            Coffee
          </button>
        </li>
        <li>
          <button
            value="tea"
            onClick={onData}
            className="w-full flex items-center justify-start px-5 py-3 rounded shadow mb-1 cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
          >
            Tea
          </button>
        </li>
        <li>
          <button
            value="pastries"
            onClick={onData}
            className="w-full flex items-center justify-start px-5 py-3 rounded shadow mb-1 cursor-pointer hover:bg-Mocha-light hover:text-white transition-all"
          >
            Pastries
          </button>
        </li>
      </ul>
    </nav>
  );
}

ProductNav.propTypes = {
  onData: PropTypes.func,
};

export default ProductNav;
