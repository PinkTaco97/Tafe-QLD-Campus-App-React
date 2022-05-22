// Import the API Layer.
import client from './client';

// Set the API Endpoint.
//const endpoint = '/campus/';

// Get all the Regions.
const getRegions = () => client.get('/region/list');

// Get all the Campuses for a given Region.
const getCampuses = (regionID) => client.get('/campus/list/'+regionID);

// Get all the Campuses.
const getCampusList = () => client.get('/campus/list');

// Export the API functions.
export default {
	getRegions,
	getCampuses,
	getCampusList,
};