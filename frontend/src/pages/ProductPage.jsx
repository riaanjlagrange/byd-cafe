import ProductNav from "../components/ProductNav";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProductPage() {
	const navigate = useNavigate();
	const location = useLocation();
	
	useEffect(() => {
		if (location.pathname === "/products") {
			navigate("/products/recommended");
		}
	}, [location, navigate]);

  return (
	<>
		<div className="flex justify-center align-center flex-col gap-10 w-[100vw] my-10">
			<section>
				<h1 className="md:text-2xl font-bold text-Mocha text-center">Our Products</h1>
				<h2 className="italic text-Mocha-light text-center">Enjoy delicious drinks and food, all available at our store</h2>
			</section>
		</div>
		<div className="flex border-t-2 border-gray-200">
		  <div className="w-1/4 border-r-2">
			<ProductNav />
		  </div>
		  <div className="w-3/4">
			<Outlet />
		  </div>
		</div>
	</>
  );
}

export default ProductPage;
