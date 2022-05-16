// Import the API Layer.
import client from './client';

// Set the API Endpoint.
const endpoint = '/menu/';

// Get all Menu Categories.
const getMenuCategories = () => client.get('/menu/categories/');

// Get all Menu Categories for a given Campus.
const getMenuCategoriesCampus = (campusID) => client.get('/menu/categories/'+campusID);

// Get all Menu Items for a given Category.
const getMenuItems = (category) => client.get('/menu/items/'+category);

// Export the API functions.
export default {
	getMenuCategories,
	getMenuCategoriesCampus,
	getMenuItems
};