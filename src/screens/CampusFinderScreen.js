// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';

// Import Config Settings.
import colors from '../config/colors';

// Import API Components.
import campusApi from '../api/campus';

// Import UI Components.
import Header from '../components/Header';
import CampusCallout from '../components/CampusCallout';

const test = [
	{
		'latitude': "-27.853249",
		'longitude': "153.321111",
	}
]

// Render the Campus Finder Screen.
function CampusFinderScreen({ navigation }) {

	// The Campus List loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	// Whether there was an error. 
	const [error, setError] = useState(false);

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
			//alert(response.problem);
			console.log(response.originalError);
			setError(true);
			return (<></>);
		}
		else{
			//console.log(response.data);
			setCampuses(response.data)
			setError(false);
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
					</Marker>
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
							{/* <Text>{campus.name}</Text> */}
						</Callout>
					</Marker>)}
					
					
					{/* <Marker
						coordinate={{
							latitude: -28.0725088,
							longitude: 153.3788099,
						}}
					>
						<Callout>
							<Text>Robina Campus</Text>
						</Callout>
					</Marker> */}
				</MapView>
				{/* <ImageZoom
					cropWidth={Dimensions.get('window').width}
					cropHeight={Dimensions.get('window').height}
					imageWidth={962}
					imageHeight={1171}
				>
					<Image
						style={{width:962, height:1171}}
						source={image}
					/>
				</ImageZoom> */}
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