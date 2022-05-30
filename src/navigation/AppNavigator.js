// Import Thrid Party Libraies.
import React, { useEffect, useState, useRef } from "react";
import { Platform } from "react-native";
import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Config files.
import colors from "../config/colors";

// Import Context.
import ProfileContext from "../context/ProfileContext";

// Import Storage.
import ProfileStorage from "../storage/ProfileStorage";

// Import Navigators.
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

// Import Screens.
import CampusPickerScreen from "../screens/CampusPickerScreen";
import WebViewScreen from "../screens/WebViewScreen";
import AboutYouScreen from "../screens/AboutYouScreen";
import LoadingScreen from "../screens/LoadingScreen";

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function AppNavigator() {
	// Whether Data is being Loaded.
	const [isLoading, setIsLoading] = useState(true);

	// Reference to the Navigator.
	const navigationRef = useNavigationContainerRef();

	// Reference to the Users Profile.
	const [profile, setProfile] = useState(null);

	// Called when the Componenet is Rendered.
	useEffect(() => {
		// If the App is Loading.
		if (isLoading) {
			// Restore the User's Profile from Local Storage.
			RestoreProfile();
		} else {
			// Finished Loading...

			// If the User has a profile.
			if (profile) {
				// Redirect the User to the Main Screen.
				navigationRef.navigate("Main");
			} else {
				// Redirect the User to the About You Screen.
				navigationRef.navigate("AboutYou");
			}
		}
	}, [isLoading]);

	// Load the Users Profile from Local Storage.
	async function RestoreProfile() {
		setProfile(await ProfileStorage.retrieveProfile());
		setIsLoading(false);
	}

	return (
		<ProfileContext.Provider value={{ profile, setProfile }}>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator
					initialRouteName="Loading"
					screenOptions={{
						headerShown: false,
						animation: "slide_from_bottom",
					}}
				>
					<Stack.Screen name="Loading" component={LoadingScreen} />
					<Stack.Screen name="AboutYou" component={AboutYouScreen} />
					<Stack.Screen name="Main" component={TabNavigator} />
					<Stack.Screen name="Auth" component={AuthNavigator} />
					<Stack.Screen
						name="ChangeCampus"
						component={CampusPickerScreen}
						options={{
							presentation: "modal",
							headerShown:
								Platform.OS === "android" ? true : false,
							headerTitle: "Select a Campus",
						}}
					/>
					<Stack.Screen
						name="WebView"
						component={WebViewScreen}
						options={{
							presentation: "modal",
							headerShown:
								Platform.OS === "android" ? true : false,
							headerTitle: "WebView",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ProfileContext.Provider>
	);
}

// Export the Component.
export default AppNavigator;
