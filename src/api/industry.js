// Import the API Layer.
import client from './client';

// Get all Industries from the API.
const getIndustries = () => client.get('/industry/list');

// Export the API functions.
export default {
	getIndustries,
};