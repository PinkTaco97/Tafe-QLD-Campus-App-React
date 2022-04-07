// Import the API Layer.
import client from './client';

// Set the API Endpoint.
const endpoint = '/menu/';

// Get all Upcoming Events from the Server.
const getMenuCategories = () => client.get('/menu/categories/');

// Get all Upcoming Events from the Server.
const getMenuItems = (category) => client.get('/menu/items/'+category);

// Export the API functions.
export default {
	getMenuCategories,
	getMenuItems
};