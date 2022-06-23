// Import Thrid Party Libraies.
import React, { useState, useEffect } from "react";
import {
	Dimensions,
	ScrollView,
	StyleSheet,
	View,
	SafeAreaView,
	Alert,
	Text,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Import Config Settings.
import colors from "../config/colors";

// Import API Layers.
import campusApi from "../api/campus";

// Import UI Components.
import Header from "../components/Header";
import CampusCallout from "../components/CampusCallout";
import CampusDetails from "../components/CampusDetails";

// Render the Campus Finder Screen.
function CampusFinderScreen({ navigation }) {
	// Whether there was an error.
	const [error, setError] = useState(false);

	// Whether there was an error.
	const [detailsShown, setDetailsShown] = useState(false);

	// The Selected Campus.
	const [selectedCampus, setSelectedCampus] = useState(null);

	// The Campuses loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	useEffect(() => {
		GetCampuses();
	}, []);

	// Get the Campus Regions from the API.
	const GetCampuses = async () => {
		// Clear the Campus list.
		setCampuses([]);

		// Get Respones from API.
		const response = await campusApi.getCampusList();

		// If there was an Error.
		if (!response.ok) {
			// Update the Error state.
			setError(true);

			// Alert the User that there was an error.
			Alert.alert(
				"Error",
				"There was a problem retrieving the Campus Locations."
			);

			// Print the Error to the console.
			console.log(response.originalError);
		} else {
			// Update the Error state.
			setError(false);

			// Save the list of Campuses.
			setCampuses(response.data);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Campus Finder"
					back={true}
					onBack={() => {
						navigation.navigate("More");
					}}
				/>
				<ScrollView>
					<MapView
						style={
							detailsShown === false ? styles.map : styles.mapOpen
						}
						initialRegion={{
							latitude: -27.853249,
							longitude: 153.321111,
							latitudeDelta: 0.1,
							longitudeDelta: 0.1,
						}}
						provider={PROVIDER_GOOGLE}
						showsUserLocation={true}
						showsMyLocationButton={true}
						loadingEnabled={true}
						showsPointsOfInterest={false}
						showsCompass={true}
						onPress={() => setDetailsShown(false)}
					>
						{/* Show a Custom Marker for user Location.
						<Marker
							coordinate={{
								latitude: -27.833550,
								longitude: 153.321111,
							}}
						>
						<FontAwesome name="circle-o" size={25} color={colors.locationMarker}/>
							<Callout>
								<Text style={{width: 100}}>Your Location</Text>
							</Callout>
						</Marker> */}
						{campuses.map((campus) => (
							<Marker
								key={campus.id}
								coordinate={{
									latitude: Number(campus.latitude),
									longitude: Number(campus.longitude),
								}}
								onPress={() => {
									setDetailsShown(true);
									setSelectedCampus(campus);
								}}
							>
								{/* <FontAwesome name="map-marker" size={75} color={colors.primary}/> */}
								<Callout tooltip={false}>
									<Text>{campus.name}</Text>
									{/* <CampusCallout
									name={campus.name}
									imageURL={campus.phone}
								/> */}
								</Callout>
							</Marker>
						))}
					</MapView>
					{selectedCampus !== null ? (
						<CampusDetails campus={selectedCampus} />
					) : (
						<></>
					)}
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
		backgroundColor: colors.light,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	mapOpen: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height / 2,
	},
});

// Export the Component.
export default CampusFinderScreen;
