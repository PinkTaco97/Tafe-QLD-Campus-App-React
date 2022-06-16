// Import Thrid Party Libraies.
import React, { useState, useEffect } from "react";
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Import Config Settings.
import colors from "../config/colors";

// Import API Compponents.
import goalsAPI from "../api/goals";

// Import UI Components.
import Header from "../components/Header";
import GoalItem from "../components/GoalItem";
import Space from "../components/Space";

// Render the SDG Screen.
function SDGScreen({ navigation }) {
	// The Goals loaded from the Database.
	const [goals, setGoals] = useState([]);

	// Whether there was an error.
	const [error, setError] = useState(false);

	// Called when Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			GetGoals();
		}, [])
	);

	// Get the Goals from the API.
	async function GetGoals() {
		// Send a Request to the API and save the response.
		const response = await goalsAPI.getGoals();

		// If there was an Error.
		if (!response.ok) {
			alert(response.problem);
			console.log(response.problem);
			setError(true);
		} else {
			// console.log(response.data);
			setGoals(response.data);
			setError(false);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header title="SDG Info" />
				<FlatList
					style={styles.scrollView}
					data={goals}
					numColumns={2}
					keyExtractor={(goal) => goal.id.toString()}
					renderItem={({ item }) => (
						<GoalItem
							title={item.title}
							imageURL={item.icon}
							onPress={() =>
								navigation.navigate("SDGDetails", item)
							}
						/>
					)}
					ItemSeparatorComponent={() => <Space height={25} />}
					ListFooterComponent={() => <Space height={55} />}
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
});

// Export the Component.
export default SDGScreen;
