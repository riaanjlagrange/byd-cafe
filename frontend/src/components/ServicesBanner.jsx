function ServicesBanner() {

	const services = [
		"Free Wi-Fi",
		"Bookable Private Spaces",
		"Discounts for Students",
		"Daily Specials on Coffee & Tea",
	];

	return (
		<ul className="w-[100vw] flex h-10 bg-Mocha-lighter">
			{services.map((service, index) => (
				<li key={index} className="flex-1 flex items-center justify-center text-white font-bold italic">{service}</li>
			))}			
		</ul>
	);
}

export default ServicesBanner;
