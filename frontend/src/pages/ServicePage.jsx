import { Link } from "react-router-dom";

function ServicePage() {
	const categories = [
		{ title: "Coffee & Refershments", description: "Enjoy freshly brewed coffee, tea and light snacks.", CTA: "See Menu", CTALink: "/products", img: "/services/coffee.jpg" },
		{ title: "Private Workspaces", description: "Book a quiet, comfortable space with free Wi-Fi for working or studying.", CTA: "Book a Workspace", CTALink: "/bookings", img: "/services/workspace.jpg" },
		{ title: "Community & Events", description: "Join our events or host your own in our welcoming space.", CTA: "View Events", CTALink: "/events", img: "/services/events.jpg" },
	];
  return (
  	<div className="flex justify-center align-center flex-col gap-10 w-[100vw] my-10">
		<section>
			<h1 className="md:text-2xl font-bold text-Mocha text-center">Our Services</h1>
			<h2 className="italic text-Mocha-light text-center">Coffee, workspaces, and events - all in one place</h2>
		</section>
		<section className="mx-24 grid grid-cols-1 lg:grid-cols-3 gap-4">
			{categories.map((category, index) => (
				<div key={index} className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between">
					<img src={category.img} alt={category.title} className="h-64 w-full object-cover rounded-md mb-5" />
					<h3 className="font-bold text-Mocha">{category.title}</h3>
					<p className="text-Mocha-light mb-5">{category.description}</p>
					<Link to={category.CTALink} className="text-white bg-Mocha hover:bg-Mocha-light transition-all px-5 py-2 rounded-sm">{category.CTA}</Link>
				</div>
			))}
		</section>
		<section>
			<h2 className="text-center text-Mocha-light font-bold">Interested in hosting an event or booking a workspace?</h2>
			<Link to="/contact" className="text-white bg-Mocha hover:bg-Mocha-light transition-all px-5 py-2 rounded-sm block w-36 mx-auto mt-5 flex justify-center items-center">Book Now</Link>
		</section>
	</div>
  ) 
}

export default ServicePage;
