// Import the API Layer.
import client from "./client";

// Get all the Regions.
const login = (user) => client.post("/user/login/", user);

// Get all the Regions.
const forgotPassword = (email) =>
	client.post("/user/request-reset-email/", email);

// Get all the Regions.
const register = (user) => client.post("/user/create/", user);

// Export the API functions.
export default {
	login,
	forgotPassword,
	register,
};
