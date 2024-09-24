import ProductNav from "../components/ProductNav";
import { Outlet } from "react-router-dom";

function ProductPage() {
  return (
    <div className="flex">
      <div className="w-1/4 border-r-2">
        <ProductNav />
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductPage;
