import { FaLaptop } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
	<div className="m-auto w-3/4 lg:flex-row flex-col flex gap-20 mt-10">
		<div className="flex-1 flex flex-col items-center gap-5">
			<img src="/menu.jpg" alt="workspace" className="rounded-md"/>
			<div className="flex justify-between w-full">
				<h1 className="text-xl text-Mocha flex items-center justify-center gap-2"><HiShoppingBag />Explore Our Menu</h1>
	  			<Link to="/products/recommended" className="bg-Mocha text-white rounded-md flex gap-2 px-5 py-2 items-center justify-center hover:bg-Mocha-light transition-all">View Menu</Link>
			</div>
		</div>

		<div className="flex-1 flex flex-col items-center gap-5">
			<img src="/workspace.jpg" alt="workspace" className="rounded-md"/>
			<div className="flex justify-between w-full">
				<h1 className="text-xl text-Mocha flex items-center justify-center gap-2"><FaLaptop />Book Your Workspace</h1>
	  			<Link to="/contact" className="bg-Mocha text-white rounded-md flex gap-2 px-5 py-2 items-center justify-center hover:bg-Mocha-light transition-all">Contact Us</Link>
			</div>
		</div>
	</div>
  );
}

export default ContactCTA;
