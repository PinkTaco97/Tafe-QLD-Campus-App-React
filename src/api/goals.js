// Import the API Layer.
import client from "./client";

// Get all Goals from the API.
const getGoals = () => client.get("/goal/list");

// Export the API functions.
export default {
	getGoals,
};
