/**
 * @author Nathan Robertson
 * @version v1.0
 * @dateCreated 27/05/2022
 */

// Import the API Layer.
import client from "./client";

// Create a Profile in the Database.
const createProfile = (profile) => {
	// Reference to the API endpoint.
	const endPoint = "/profile/create";

	// Create the JSON object.
	const data = new FormData();

	// Add the profile Data.
	data.append("type", profile.type);
	data.append("industry", profile.industry);
	data.append("region", profile.region);
	data.append("campus", profile.campus);
	data.append("notificationToken", profile.notificationToken);

	// POST the JSON to the server.
	return client.post(endPoint, data);
};

// Export the API functions.
export default {
	createProfile,
};
