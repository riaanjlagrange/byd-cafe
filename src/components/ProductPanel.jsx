import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../components/Card";

function ProductPanel({ page }) {
  const [data, setData] = useState([]);
  const endpoint = `http://localhost:3002/api/${page}`;
  console.log(endpoint);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [endpoint]);

  if (data.length < 1) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <ul className="grid grid-cols-3 grid-rows-auto auto-rows-fr p-10 gap-10">
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </ul>
  );
}

ProductPanel.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ProductPanel;
