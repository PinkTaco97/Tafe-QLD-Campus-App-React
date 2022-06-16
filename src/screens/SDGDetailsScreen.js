// Import Thrid Party Libraies.
import React, { useState, useEffect } from "react";
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	ScrollView,
	View,
} from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Import UI Compponents.
import Header from "../components/Header";
import Button from "../components/Button";
import Space from "../components/Space";

// Render SDG Details Screen.
function SDGDetailsScreen({ navigation, route }) {
	// The Goal Data passed from the Previous Screen.
	const goal = route.params;

	// The Goal's Image.
	const image = { uri: goal.image };

	// The Goal's Icon.
	const icon = { uri: goal.icon };

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title={goal.title}
					back={true}
					onBack={() => {
						navigation.goBack();
					}}
				/>
				<ScrollView style={styles.scrollView}>
					{/* <Image style={styles.icon} source={icon} /> */}
					<Image style={styles.image} source={image} />

					{/* <Text style={styles.description}>{goal.description}</Text> */}
					<Button
						title="More Info"
						onPress={() =>
							navigation.navigate("WebView", goal.infoLink)
						}
					></Button>
					<Space height={25} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	contentWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.white,
	},
	// container: {
	// 	flex: 1,
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	backgroundColor: colors.white,
	// },
	icon: {
		width: "50%",
		alignSelf: "center",
		aspectRatio: 1,
		borderRadius: 15,
		margin: 12.5,
		// height: 400,
	},
	image: {
		width: "100%",
		aspectRatio: 0.75,
		// height: undefined,
		// height: 600,
		// flex: 1,
	},
	title: {
		flex: 1,
		flexWrap: "wrap",
		height: 75,
		fontSize: 25,
		fontWeight: "bold",
		color: colors.dark,
		textAlign: "center",
		textAlignVertical: "center",
		marginTop: 10,
	},
	scrollView: {
		backgroundColor: colors.white,
	},
	description: {
		fontSize: 15,
		color: colors.dark,
		backgroundColor: colors.white,
		padding: 25,
		textAlign: "center",
	},
});

// Export the Component.
export default SDGDetailsScreen;
