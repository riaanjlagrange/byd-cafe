import Hero from "../components/Hero";
import ContactCTA from "../components/ContactCTA";

function HomePage() {
  return (
	<div className="flex items-center gap-10 flex-col w-[100vw] mb-14">
  		<Hero />
		<ContactCTA />
	</div>
  );
}

export default HomePage;
