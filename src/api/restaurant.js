// Import the API Layer.
import client from './client';

// Get all Restaurants for a given Campus.
const getRestaurantsByCampus = (campusID) => client.get('/resturant/list/'+campusID);

// Get Restaurant Hours for a given Restaurant.
const getRestaurantHours = (restaurantID) => client.get('/menu/items/'+restaurantID);

// Export the API functions.
export default {
	getRestaurantsByCampus,
	getRestaurantHours,
};