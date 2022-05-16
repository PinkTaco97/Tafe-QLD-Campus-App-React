// Import the API Layer.
import client from './client';

// Set the API Endpoint.
//const endpoint = '/campus/';

// Get all Upcoming Events from the Server.
const getRegions = () => client.get('/regions/');

// Get all Upcoming Events from the Server.
const getCampuses = (region) => client.get('/regions/campuses/'+region);

// Export the API functions.
export default {
	getRegions,
	getCampuses
};