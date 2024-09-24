import { useState } from 'react';

function BookingsPage() {
	 const [workspaceType, setWorkspaceType] = useState('shared');
	  const [date, setDate] = useState('');
	  const [timeSlot, setTimeSlot] = useState('');
	  const [name, setName] = useState('');
	  const [email, setEmail] = useState('');
	  const [specialRequests, setSpecialRequests] = useState('');

	  const handleSubmit = (e) => {
		e.preventDefault();
		// Logic to handle form submission, e.g., sending data to backend or API
		console.log({
		  workspaceType,
		  date,
		  timeSlot,
		  name,
		  email,
		  specialRequests,
		});
		alert('Booking submitted!');
	  };
	return (
		<div className="flex justify-center align-center flex-col gap-10 w-[100vw] my-10">
			<section>
				<h1 className="md:text-2xl font-bold text-Mocha text-center">Book Your Workspace at BYD Cafe</h1>
				<h2 className="italic text-Mocha-light text-center mb-10">Choose your perfect spot for studying, working, or hosting an event</h2>

				<form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4 bg-white drop-shadow-lg rounded-lg">
				  <div>
					<label htmlFor="workspace-type" className="block font-semibold">Choose Workspace Type:</label>
					<select className="w-full border-gray-300 rounded-md p-2 mt-1 border-2" id="workspace-type" value={workspaceType} onChange={(e) => setWorkspaceType(e.target.value)}>
					  <option value="shared">Shared Workspace</option>
					  <option value="private">Private Room</option>
					  <option value="group">Group Table</option>
					</select>
				  </div>
				  <div>
					<label htmlFor="date" className="block font-semibold">Choose Date:</label>
					<input type="date" className="w-full border-gray-300 rounded-md p-2 mt-1 border-2" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
				  </div>
				  <div>
					<label htmlFor="time-slot" className="block font-semibold">Choose Time Slot:</label>
					<select className="w-full border-gray-300 rounded-md p-2 mt-1" id="time-slot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
					  <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
					  <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
					  <option value="evening">Evening (4:00 PM – 8:00 PM)</option>
					</select>
				  </div>
				  <div>
					<label htmlFor="name" className="block font-semibold">Your Name:</label>
					<input type="text" className="w-full border-gray-300 rounded-md p-2 mt-1 border-2" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
				  </div>
				  <div>
					<label htmlFor="email" className="block font-semibold">Your Email:</label>
					<input type="email" className="w-full border-gray-300 rounded-md p-2 mt-1 border-2" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				  </div>
				  <div>
					<label htmlFor="special-requests" className="block font-semibold">Special Requests:</label>
					<textarea className="w-full border-gray-300 rounded-md p-2 mt-1 border-2" id="special-requests" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Let us know if you need anything specific." />
				  </div>
				  <button type="submit" className="bg-Mocha hover:bg-Mocha-light text-white p-2 w-full rounded-md">Book Now</button>
				</form>
			</section>
		</div>	
	);
}


export default BookingsPage;
