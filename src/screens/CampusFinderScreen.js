// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

// Import Config Settings.
import colors from '../config/colors';

// Import API Layers.
import campusApi from '../api/campus';

// Import UI Components.
import Header from '../components/Header';
import CampusCallout from '../components/CampusCallout';

// Render the Campus Finder Screen.
function CampusFinderScreen({ navigation }) {

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// The Campuses loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	useEffect(() => {
		GetCampuses();
	}, [])

	// Get the Campus Regions from the API.
	const GetCampuses = async () => {
		
		// Clear the Campus list.
		setCampuses([]);
		
		// Get Respones from API.
		const response = await campusApi.getCampusList();

		// If there was an Error.
		if(!response.ok){

			// Update the Error state.
			setError(true);

			// Alert the User that there was an error.
			Alert.alert("Error", "There was a problem retrieving the Campus Locations.");

			// Print the Error to the console.
			console.log(response.originalError);
		}
		else{
			// Update the Error state.
			setError(false);

			// Save the list of Campuses.
			setCampuses(response.data);
		}
	}

    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Campus Finder"
					back={true}
					onBack={() => {navigation.navigate("More");}}
				/>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: -27.853249,
						longitude: 153.321111,
						latitudeDelta: 0.1,
						longitudeDelta: 0.1,
					}}
					showsUserLocation={true}
					showsMyLocationButton={true}
					loadingEnabled={true}
                    showsPointsOfInterest={false}
                    showsCompass={true}
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
					{campuses.map((campus) => <Marker
						key={campus.id}
						coordinate={{
							latitude: Number(campus.latitude),
							longitude: Number(campus.longitude),
						}}
					>
					{/* <FontAwesome name="map-marker" size={75} color={colors.primary}/> */}
						<Callout tooltip={true}>
							<CampusCallout
								name={campus.name}
								imageURL={campus.phone}
							/>
						</Callout>
					</Marker>)}
				</MapView>
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
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
})

// Export the Component.
export default CampusFinderScreen;