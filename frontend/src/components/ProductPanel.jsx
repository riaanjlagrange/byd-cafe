import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function ProductPanel() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoint = "/api/data";
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
  }, []);

  if (data.length < 1) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <ul className="h-[90vh] overflow-x-hidden overflow-y-scroll grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10 gap-[5rem] justify-center">
      {data[category].map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </ul>
  );
}

export default ProductPanel;
