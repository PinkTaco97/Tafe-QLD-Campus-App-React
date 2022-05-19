// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config Settings.
import colors from '../config/colors';

// Import API Components.
import campusApi from '../api/campus';

// Import UI Components.
import Header from '../components/Header';
import Button from '../components/Button';

// Render the Map Screen.
function CampusPickerScreen({navigation, props}) {

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// The Regions loaded from the Database.
	const [regions, setRegions] = useState([]);

	// The Campuses loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	// The Selected Region.
	const [selectedRegion, setSelectedRegion] = useState(0);

	// The Selected Campus.
	const [selectedCampus, setSelectedCampus] = useState(0);

	// The Selected Campuses Name.
	//const [selectedCampusName, setSelectedCampusName] = useState(null);

	// Called when Componenet is Rendered.
	useEffect(() => {
		GetRegions();
		GetCampuses(selectedRegion);
	}, [selectedRegion])

	// Get the Campus Regions from the API.
	const GetRegions = async () => {
		const response = await campusApi.getRegions();

		// If there was an Error.
		if(!response.ok){
			//alert(response.problem);
			//console.log(response.problem);
			setError(true);
			return (<></>);
		}
		else{
			//console.log(response.data);
			setRegions(response.data)
			setError(false);
		}
	}

	// Get the Campus Regions from the API.
	const GetCampuses = async (region) => {
		
		// Clear the Campus list.
		setCampuses([]);
		
		// Get Respones from API.
		const response = await campusApi.getCampuses(region);

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

	// Save the Selected Campus to the Device.
	const UpdateCampus = async () => {
		try {
			await AsyncStorage.setItem('@selected_campus', selectedCampus.toString())
			alert("Updated your Campus!");
			navigation.navigate("More");
		} catch (e) {
			alert("There was an error updating your Campus." + e);
		}
	}

    return (
		<View style={styles.container}>
			{/* <Header title="Campus Picker"/> */}
			<Text style={styles.heading}>Select a Region:</Text>
			<Picker
				selectedValue={selectedRegion}
				style={styles.picker}
				onValueChange={(itemValue, itemIndex) => {
					console.log("Selected Region: " + itemValue);
					setSelectedRegion(itemValue);
				}}
			>
				{/* <Picker.Item label="Select Region" value={-1} key={-1} /> */}
				{regions.map(region => <Picker.Item label={region.name} value={region.id} key={region.id}/>)}
			</Picker>
			<Text style={styles.heading}>Select a Campus:</Text>
			<Picker
				selectedValue={selectedCampus}
				style={styles.picker}
				onValueChange={(itemValue, itemIndex) => {
					console.log("Selected Campus: " + itemValue);
					setSelectedCampus(itemValue);
				}}
			>
				{/* <Picker.Item label="Select Campus" value={-1} key={-1} /> */}
				{campuses.map(campus => <Picker.Item label={campus.name} value={campus.id} key={campus.id} />)}
			</Picker>
			<Button title="Update Campus" onPress={() => UpdateCampus()}/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	heading: {
		margin: 5,
		padding: 5,
		fontSize: 15,
	},
	picker: {
		padding: 10,
		backgroundColor: colors.white,
	},
})

// Export the Component.
export default CampusPickerScreen;