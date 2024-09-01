import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <li className="relative m-5 flex flex-col items-center rounded-t shadow-lg">
      <div className="bg-Mocha-light w-full h-60 shadow"></div>
      <div className="p-5 flex flex-col justify-between">
        <h2 className="text-lg font-bold text-Mocha-dark mb-3">{data.name}</h2>
        <span className="absolute right-[-0.5rem] top-[-0.5rem] bg-Beige rounded-full p-4 font-bold text-Mocha">
          R{data.price}
        </span>
        <p className="">{data.description}</p>
        <ul className="flex gap-3 items-center justify-center">
          {data.size.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
