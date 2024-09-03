import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <li className="card bg-base-100 w-full shadow-md hover:shadow-xl hover:scale-105 transition-all">
      <figure className="h-[12rem]">
        <img src={data.image} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary bg-Mocha text-white border-none">
            {data.price} ZAR
          </div>
        </h2>
        <p className="h-20">{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{data.size[0]}</div>
          <div className="badge badge-outline">{data.size[1]}</div>
        </div>
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
    image: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
