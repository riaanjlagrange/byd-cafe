import { useState } from "react";
import ProductNav from "../components/ProductNav";
import ProductPanel from "../components/ProductPanel";

import {
  recommendedData,
  coffeeData,
  teaData,
  pastriesData,
} from "../data/product-data";

function ProductPage() {
  const [page, setPage] = useState("recommended");

  const handlePage = ({ target }) => {
    const { value } = target;
    setPage(value);
  };

  const sendData = () => {
    switch (page) {
      case "recommended":
        return recommendedData;
      case "coffee":
        return coffeeData;
      case "tea":
        return teaData;
      case "pastries":
        return pastriesData;
      default:
        return recommendedData;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 border-r-2">
        <ProductNav onData={handlePage} />
      </div>
      <div className="w-3/4">
        <ProductPanel data={sendData()} />
      </div>
    </div>
  );
}

export default ProductPage;
