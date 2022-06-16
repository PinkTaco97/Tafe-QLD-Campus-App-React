// Import Thrid Party Libraies.
import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import the Application Screens.
import SDGScreen from "../../src/screens/SDGScreen";
import SDGDetailsScreen from "../screens/SDGDetailsScreen";

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function SDGNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="SDG"
			screenOptions={{
				headerShown: false,
				animation: "slide_from_right",
			}}
		>
			<Stack.Screen name="SDG" component={SDGScreen} />
			<Stack.Screen name="SDGDetails" component={SDGDetailsScreen} />
		</Stack.Navigator>
	);
}

// Export the Component.
export default SDGNavigator;
