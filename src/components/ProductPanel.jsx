import PropTypes from "prop-types";
import Card from "../components/Card";

function ProductPanel({ data }) {
  const safeItems = data || [];
  return (
    <ul className="grid grid-cols-3 grid-rows-auto auto-rows-fr p-10 gap-10">
      {safeItems.length > 0 ? (
        safeItems.map((item, index) => (
          <Card
            name={item.name}
            description={item.description}
            price={item.price}
            size={item.size}
            key={index}
          />
        ))
      ) : (
        <li>{alert(data)}</li>
      )}
    </ul>
  );
}

ProductPanel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      size: PropTypes.arrayOf(PropTypes.string), // Adjust based on actual structure
    })
  ).isRequired,
};

export default ProductPanel;
