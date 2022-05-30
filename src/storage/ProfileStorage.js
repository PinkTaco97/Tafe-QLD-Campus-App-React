/**
 * @author	Nathan Robertson
 * @purpose	An interface to CRUD Profile data in Local Storage.
 * @version	v1.0
 * @date	30/05/2022
 */

// Import Thrid Party Libraies.
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Config Settings.
import settings from "../config/settings";

// Store the Users Profile in Local Storage.
async function storeProfile(profile) {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Saving Profile...");

	try {
		// Save the Profile Object in Local Storage.
		await AsyncStorage.setItem("@profile", JSON.stringify(profile));

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Saved Profile!");
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Storing Profile:\n" + e);
	}
}

// Retrieve the Users Profile from Local Storage.
async function retrieveProfile() {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Retrieving Profile...");

	try {
		// Retrieve the Profile JSON in Local Storage.
		const jsonValue = await AsyncStorage.getItem("@profile");

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Retrieved Profile!");

		// Return the Profile Object.
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Retrieving Profile:\n" + e);
	}
}

// Remove the Users Profile from Local Storage.
async function removeProfile() {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Removing Profile...");

	try {
		// Remove the Profile Object from Local Storage.
		await AsyncStorage.removeItem("@profile");

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Removed Profile!");
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Removing Profile:\n" + e);
	}
}

// Export the Profile Storage Functions.
export default {
	storeProfile,
	retrieveProfile,
	removeProfile,
};
