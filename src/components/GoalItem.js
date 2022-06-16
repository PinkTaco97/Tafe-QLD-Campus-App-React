// Import Thrid Party Libraies.
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Render the GoalItem Component.
function GoalItem({ title, imageURL, onPress }) {
	const image = { uri: imageURL };
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.goal} onPress={onPress}>
				<Image style={styles.image} source={image} />
			</TouchableOpacity>
		</View>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		aspectRatio: 1,
	},
	goal: {
		flex: 1,
		margin: 12.5,
		backgroundColor: colors.white,
		overflow: "hidden",
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

// Export the Component.
export default GoalItem;
