// Import the API Layer.
import client from "./client";

// Get all Upcoming Events from the API.
const getUpcomingEvents = () => client.get("/events/upcoming");

// Export the API functions.
export default {
	getUpcomingEvents,
};
