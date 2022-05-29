// Import the API Layer.
import client from './client';

// Get all Facilities for a given Campus.
const getFacilitiesByCampus = (campusID) => client.get('/facility/list/'+campusID);

// Export the API functions.
export default {
	getFacilitiesByCampus
};