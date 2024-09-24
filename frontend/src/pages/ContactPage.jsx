import { Link } from 'react-router-dom';

function ContactPage() {

	return (
		<div className="my-10 flex flex-col gap-10 w-[100vw] justify-center items-center">
			<section>
				<h1 className="md:text-2xl font-bold text-Mocha text-center">Get in Touch with Us</h1>
				<h2 className="italic text-Mocha-light text-center">We'd love to hear from you - whether it's about a booking, a question or feedback</h2>	
			</section>
			<section>
				<form className="flex flex-col gap-5 w-96 mx-auto">
					<label htmlFor="name" className="text-Mocha">Name</label>
					<input type="text" id="name" name="name" className="border border-Mocha-light rounded-md p-2" />
					<label htmlFor="email" className="text-Mocha">Email</label>
					<input type="email" id="email" name="email" className="border border-Mocha-light rounded-md p-2" />
					<label htmlFor="message" className="text-Mocha">Message</label>
					<textarea id="message" name="message" className="border border-Mocha-light rounded-md p-2 h-36"></textarea>
					<button type="submit" className="bg-Mocha text-white hover:bg-Mocha-light transition-all rounded-md p-2">Send</button>
				</form>
			</section>
			<section>
				<h2 className="text-center text-Mocha font-bold mb-5">Reach out to us directly or visit our store today!</h2>
				<p className="text-center text-Mocha">Email: <Link to="mailto:info@brewyourday.com" className="underline font-bold hover:text-Mocha-light">info@brewyourday.com</Link></p>
				<p className="text-center text-Mocha">Phone: <Link to="tel:0716164951" className="underline font-bold hover:text-Mocha-light">+27 71 616 4951</Link></p>
				<p className="text-center text-Mocha">Addess: <Link to="https://maps.app.goo.gl/9mEib7w9U3RXwWps7" className="underline font-bold hover:text-Mocha-light">Cleveland St, Boston, Cape Town, 7530</Link></p>
				<p className="text-center text-Mocha">Hours: Monday - Friday, 8am - 6pm</p>
			</section>
		</div>
	);
}


export default ContactPage;
