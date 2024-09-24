
function ContactForm() {


	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Form submitted');
	}

	return(
		<form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="text" placeholder="Subject" />
			<textarea placeholder="Message"></textarea>
			<button type="submit">Send</button>
		</form>
	);
}


export default ContactForm;
