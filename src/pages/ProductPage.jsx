import { useState } from "react";
import ProductNav from "../components/ProductNav";
import ProductPanel from "../components/ProductPanel";

function ProductPage() {
  const [page, setPage] = useState("recommended");

  const handlePage = ({ target }) => {
    const { value } = target;
    setPage(value);
  };

  return (
    <div className="flex">
      <div className="w-1/4 border-r-2">
        <ProductNav onData={handlePage} />
      </div>
      <div className="w-3/4">
        <ProductPanel page={page} />
      </div>
    </div>
  );
}

export default ProductPage;
