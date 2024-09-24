
function Hero() {
  return (
	<div className="relative w-full bg-gray-800 overflow-hidden">
		<img className="w-full blur-sm brightness-75" src="/banner.jpg" alt="hero" />
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:gap-5 gap-2 items-center justify-center backdrop-brightness-50 px-5 py-2 rounded-sm">
			<h1 className="text-lg md:text-3xl font-bold text-white text-center">Brew your Day</h1>
			<p className="text-sm md:text-xl text-white text-center">Kickstart your productive day with BYD Cafe</p>
		</div>
	</div>
  );
}

export default Hero;
