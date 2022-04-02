// Import the API Layer.
import client from './client';

// Set the API Endpoint.
const endpoint = '/points/';

// Get a Specific Point of Interest from the Server.
const getPoint = (code) => client.get('/points/'+code);

// Export the API functions.
export default {
	getPoint,
};