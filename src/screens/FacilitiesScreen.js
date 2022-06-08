// Import Thrid Party Libraies.
import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

// Import Config Settings.
import colors from "../config/colors";

// Import Context.
import ProfileContext from "../context/ProfileContext";

// Import API Components.
import facilityAPI from "../api/facility";

// Import UI Components.
import Header from "../components/Header";
import MenuCategoryItem from "../components/MenuCategoryItem";
import Space from "../components/Space";

// Render the Facilities Screen.
function FacilitiesScreen({ navigation }) {
	// Reference to the Users Profile.
	const profileContext = useContext(ProfileContext);

	// The Facilities loaded from the Database.
	const [facilities, setFacilities] = useState([]);

	// Whether there was an error.
	const [error, setError] = useState(false);

	// Called when Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			//GetSelectedCampus();
			GetFacilities(profileContext.profile.campus);
		}, [])
	);

	// Load the Selected Campus from Local Storage.
	const GetSelectedCampus = async () => {
		try {
			GetFacilities(
				Number(await AsyncStorage.getItem("@selected_campus"))
			);
		} catch (e) {
			alert(e);
		}
	};

	// Get the Facilities from the API.
	const GetFacilities = async (campusID) => {
		const response = await facilityAPI.getFacilitiesByCampus(campusID);

		// If there was an Error.
		if (!response.ok) {
			// Update the Error state.
			setError(true);

			// Alert the User that there was an error.
			//alert(response.originalError);

			// Print the Error to the console.
			console.log(response.status + " - " + response.problem);
		} else {
			// Update the Error state.
			setError(false);

			// Save the list of Facilities.
			setFacilities(response.data);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header title="Facilities" />
				{facilities.length === 0 ? (
					<Text style={styles.message}>
						This Campus dosn't have any Facilities.
					</Text>
				) : (
					<></>
				)}
				<FlatList
					style={styles.scrollView}
					data={facilities}
					// numColumns={2}
					keyExtractor={(facility) => facility.id.toString()}
					renderItem={({ item }) => (
						<MenuCategoryItem
							name={item.name}
							imageURL={item.image}
							onPress={() =>
								navigation.navigate("FacilityDetails", item)
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
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.light,
	},
	message: {
		color: colors.black,
		fontSize: 15,
		fontWeight: "bold",
		padding: 10,
	},
	scrollView: {
		width: "100%",
		padding: 25,
	},
});

// Export the Component.
export default FacilitiesScreen;
