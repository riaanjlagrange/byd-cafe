import { Link } from "react-router-dom";

function EventsPage() {
	const events = [
		{ title: "Latte Art Workshop", date: "October 10, 2024", time: "10:00 AM - 12:00 PM", description: "Learn how to make beautiful latte art with our expert baristas.", img: "/events/latte-art.jpg" },
		{ title: "Coffee Tasting", date: "October 15, 2024", time: "2:00 PM - 4:00 PM", description: "Sample our latest coffee blends and learn about the brewing process.", img: "/events/tasting.jpg" },
		{ title: "Open Mic Night", date: "October 20, 2024", time: "6:00 PM - 8:00 PM", description: "Join us for an evening of music, poetry, and spoken word performances.", img: "/events/open-mic.jpg" },
		{ title: "Book Club Meeting", date: "October 25, 2024", time: "4:00 PM - 6:00 PM", description: "Discuss the latest book selection with fellow book lovers over coffee.", img: "/events/book-club.jpg" },
		{ title: "Live Music Performance", date: "October 30, 2024", time: "7:00 PM - 9:00 PM", description: "Enjoy live music from local artists while sipping on your favorite drink.", img: "/events/live-music.jpg" },
		{ title: "Coffee & Canvas", date: "November 5, 2024", time: "3:00 PM - 5:00 PM", description: "Unleash your creativity with a guided painting session and coffee tasting.", img: "/events/canvas.jpg" },
		{ title: "Brewing Basics Class", date: "November 10, 2024", time: "11:00 AM - 1:00 PM", description: "Learn the fundamentals of brewing coffee at home with our brewing experts.", img: "/events/brewing.jpg" },
		{ title: "Holiday Cookie Decorating", date: "November 15, 2024", time: "2:00 PM - 4:00 PM", description: "Get into the holiday spirit with a cookie decorating workshop for all ages.", img: "/events/cookie.jpg" },
		{ title: "Trivia Night", date: "November 25, 2024", time: "7:00 PM - 9:00 PM", description: "Test your knowledge and compete for prizes in our fun trivia competition.", img: "/events/trivia.jpg" },
	];

	return (
		<div className="flex justify-center align-center flex-col gap-10 w-[100vw] my-10">
			<section>
				<h1 className="md:text-2xl font-bold text-Mocha text-center">Upcoming Events at BYD Cafe</h1>
				<h2 className="italic text-Mocha-light text-center">Join us for community gatherings, workshops, and special events</h2>
			</section>
			<section className="mx-24 grid grid-cols-1 lg:grid-cols-3 gap-4">
				{events.map((event, index) => (
					<div key={index} className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between">
						<img src={event.img} alt={event.title} className="h-64 w-full object-cover rounded-md mb-5" />
						<h3 className="font-bold text-Mocha">{event.title}</h3>
						<p className="text-Mocha-light mb-5">{event.date} | {event.time}</p>
						<p className="text-Mocha-light mb-5">{event.description}</p>
						<button className="text-white bg-Mocha hover:bg-Mocha-light transition-all px-5 py-2 rounded-sm">RSVP</button>
					</div>
				))}
			</section>
			<section>
				<h2 className="text-center text-Mocha-light font-bold">Interested in hosting an event or workshop?</h2>
				<Link to="/contact" className="text-white bg-Mocha hover:bg-Mocha-light transition-all px-5 py-2 rounded-sm w-36 mx-auto mt-5 flex justify-center items-center">Contact Us</Link>
			</section>
		</div>	
	)
}


export default EventsPage;
