// Import Thrid Party Libraies.
import React from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Render the Loading Screen.
function LoadingScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ActivityIndicator
				style={styles.loader}
				size={100}
				color={colors.primary}
			/>
		</SafeAreaView>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.light,
	},
});

// Export the Component.
export default LoadingScreen;
