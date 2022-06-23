/**
 * @author	Nathan Robertson
 * @purpose	An Interface to CRUD Authentication Data in Local Storage.
 * @version	v1.0
 * @date	30/05/2022
 */

// Import Thrid Party Libraies.
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Config Settings.
import settings from "../config/settings";

// Store the Users Authentication Data in Local Storage.
async function storeAuth(auth) {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Saving Authentication...");

	try {
		// Save the Profile Object in Local Storage.
		await AsyncStorage.setItem("@auth", JSON.stringify(auth));

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Saved Authentication!");
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Storing Authentication:\n" + e);
	}
}

// Retrieve the Users Athentication from Local Storage.
async function retrieveAuth() {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Retrieving Authentication...");

	try {
		// Retrieve the  JSON in Local Storage.
		const jsonValue = await AsyncStorage.getItem("@auth");

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Retrieved Authentication!");

		// Return the Profile Object.
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Retrieving Authentication:\n" + e);
	}
}

// Remove the Users Profile from Local Storage.
async function removeAuth() {
	// Print the Action to the Console.
	if (settings.isDebug) console.log("Removing Authentication...");

	try {
		// Remove the Profile Object from Local Storage.
		await AsyncStorage.removeItem("@auth");

		// Print the Action to the Console.
		if (settings.isDebug) console.log("Removed Authentication!");
	} catch (e) {
		// Print the Error to the Console.
		if (settings.isDebug)
			return console.log("Error Removing Authentication:\n" + e);
	}
}

// Export the Profile Storage Functions.
export default {
	storeAuth,
	retrieveAuth,
	removeAuth,
};
