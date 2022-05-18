// Import the API Layer.
import client from './client';

// Set the API Endpoint.
const endpoint = '/events/';

// Get all Upcoming Events from the Server.
const getUpcomingEvents = () => client.get('/events/upcoming');

// Export the API functions.
export default {
	getUpcomingEvents,
};