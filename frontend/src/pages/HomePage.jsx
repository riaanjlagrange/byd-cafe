import Hero from "../components/Hero";
import ContactCTA from "../components/ContactCTA";
import ServicesBanner from "../components/ServicesBanner";

function HomePage() {
  return (
	<div className="flex items-center flex-col w-[100vw] mb-14">
  		<Hero />
		<ServicesBanner />
		<ContactCTA />
	</div>
  );
}

export default HomePage;
