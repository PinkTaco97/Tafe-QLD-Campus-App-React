// Import Thrid Party Libraies.
import React from "react";
import { StyleSheet, View } from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Import UI Components.
import Header from "../components/Header";
import OnBoardingForm from "../components/OnBoardingForm";

// Render the About You Screen.
function AboutYouScreen({ navigation, route }) {
	// The Notification Token passed from the App Navigator.
	const data = route.params;

	return (
		<View>
			<Header title="Welcome" />
			<OnBoardingForm token={data} />
		</View>
	);
}

// Style the Components.
const styles = StyleSheet.create({});

// Export the Component.
export default AboutYouScreen;
