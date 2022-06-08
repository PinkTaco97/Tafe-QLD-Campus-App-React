// Import Thrid Party Libraies.
import React, { useEffect, useState, useRef } from "react";
import { Platform } from "react-native";
import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

// Import Config files.
import colors from "../config/colors";

// Import Context.
import ProfileContext from "../context/ProfileContext";
import AuthContext from "../context/AuthContext";

// Import Storage.
import ProfileStorage from "../storage/ProfileStorage";
import AuthStorage from "../storage/AuthStorage";

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

// Set the Notification Handler.
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

function AppNavigator() {
	// Whether Data is being Loaded.
	const [isLoading, setIsLoading] = useState(true);

	// Reference to the Navigator.
	const navigationRef = useNavigationContainerRef();

	// Reference to the Users Profile.
	const [profile, setProfile] = useState(null);

	// Reference to the Users Authentication.
	const [auth, setAuth] = useState({
		key: null,
		token: null,
		isLoading: false, 
	});

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
				// Check Whether the Profile has a Notification Token.
				if (profile.notificationToken)
					// Redirect the User to the Main Screen.
					return navigationRef.navigate("Main");

				// Register User for Push Notifications.
				registerForPushNotificationsAsync().then((token) => {
					profile.notificationToken = token;
					navigationRef.navigate("Main");
				});
			} else {
				// Register User for Push Notifications.
				registerForPushNotificationsAsync().then((token) => {
					// Redirect the User to the About You Screen.
					navigationRef.navigate("AboutYou", token);
				});
			}
		}
	}, [isLoading]);

	// Load the Users Profile from Local Storage.
	async function RestoreProfile() {
		setProfile(await ProfileStorage.retrieveProfile());
		RestoreAccount();
	}

	// Load the Users Account from Local Storage.
	async function RestoreAccount() {
		setAuth(await AuthStorage.retrieveAuth());
		setIsLoading(false);
	}

	// Register the User for Push Noitifications.
	async function registerForPushNotificationsAsync() {
		// The Notification Token
		let token;

		// If the App is Running on a Physical Device.
		if (Device.isDevice) {
			const { status: existingStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== "granted") {
				const { status } =
					await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== "granted") {
				alert("Failed to get push token for push notification!");
				return;
			}
			token = (await Notifications.getExpoPushTokenAsync()).data;
			//console.log(token);
		} else {
			alert("Must use physical device for Push Notifications");
		}

		// If the Platform is Android.
		if (Platform.OS === "android") {
			// Set the Notification Channel.
			Notifications.setNotificationChannelAsync("default", {
				name: "default",
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: "#FF231F7C",
			});
		}
		// Return the Notification Token
		return token;
	}

	return (
		<ProfileContext.Provider value={{ profile, setProfile }}>
			<AuthContext.Provider value={{ auth, setAuth }}>
				<NavigationContainer ref={navigationRef}>
					<Stack.Navigator
						initialRouteName="Loading"
						screenOptions={{
							headerShown: false,
							// animation: "slide_from_bottom",
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
			</AuthContext.Provider>
		</ProfileContext.Provider>
	);
}

// Export the Component.
export default AppNavigator;
