// Import Thrid Party Libraies.
import React from "react";
import {
	SafeAreaView,
	SectionList,
	StyleSheet,
	Text,
	View,
} from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Import UI Components.
import Header from "../components/Header";

// Render the Credits Screen.
function CreditsScreen({ navigation }) {
	const credits = [
		{
			title: "July 2021 Cohort",
			data: ["Nathan Robertson", "Indra Shrestha", "Tracey Fox"],
		},
		{
			title: "Janurary 2021 Cohort",
			data: ["Please Update", "Please Update", "Please Update"],
		},
		{
			title: "Project Manager",
			data: ["Elankayer Sithirasnan"],
		},
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Credits"
					back={true}
					onBack={() => {
						navigation.navigate("More");
					}}
				/>
				<SectionList
					sections={credits}
					renderItem={({ item }) => (
						<Text style={styles.item}>{item}</Text>
					)}
					renderSectionHeader={({ section }) => (
						<Text style={styles.sectionHeader}>
							{section.title}
						</Text>
					)}
					keyExtractor={(item, index) => index}
				/>
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
		backgroundColor: colors.light,
	},
	sectionHeader: {
		padding: 10,
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		textAlign: "center",
	},
});

// Export the Component.
export default CreditsScreen;
