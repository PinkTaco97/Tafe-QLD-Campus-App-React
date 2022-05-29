// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config Settings.
import colors from '../config/colors';

// Import API Layers.
import campusAPI from '../api/campus';

// Import UI Components.
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

	// Called when Componenet is Rendered.
	// Or when the Selected Region Changes.
	useEffect(() => {
		GetRegions();
	}, [selectedRegion])

	// Get the Campus Regions from the API.
	const GetRegions = async () => {
		
		// Get the Respone from the API.
		const response = await campusAPI.getRegions();

		// If there was an Error.
		if(!response.ok){
			// Update the Error state.
			setError(true);

			// Alert the User that there was an error.
			Alert.alert("Error", "There was a problem retrieving the list of Regions.");

			// Print the Error to the console.
			console.log(response.originalError);
		}
		else{
			// Update the Error state.
			setError(false);

			// Save the list of Regions.
			setRegions(response.data)

			// Get the list of Campuses.
			GetCampuses(selectedRegion);
		}
	}

	// Get the Campus Regions from the API.
	const GetCampuses = async (region) => {
		
		// Clear the Campus list.
		setCampuses([]);
		
		// Get the Respone from the API.
		const response = await campusAPI.getCampusesByRegion(region);

		// If there was an Error.
		if(!response.ok){
			// Update the Error state.
			setError(true);

			// Alert the User that there was an error.
			Alert.alert("Error", "There was a problem retrieving the list of Campuses.");
			
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

	// Save the Selected Campus to the Device.
	const UpdateCampus = async () => {
		try {
			// Save the New Selected Campus to the Local Storage.
			await AsyncStorage.setItem('@selected_campus', selectedCampus.toString())
			
			// Alert the User that their Campus was Updated.
			Alert.alert("Success", "Updated your Campus!");

			// Redirect the User to the More Screen.
			navigation.navigate("More");
		
		// If there was an Error.
		} catch (e) {
			// Alert the User that there was an error.
			Alert.alert("Error", "There was an problem updating your Campus.");

			// Print the Error to the console.
			console.log(e);
		}
	}

    return (
		<View style={styles.container}>
			<Text style={styles.heading}>Select a Region:</Text>
			<Picker
				selectedValue={selectedRegion}
				style={styles.picker}
				itemStyle={styles.pickerItem}
				onValueChange={(itemValue) => setSelectedRegion(itemValue)}
			>
				{regions.map(region => <Picker.Item label={region.name} value={region.id} key={region.id}/>)}
			</Picker>
			<Text style={styles.heading}>Select a Campus:</Text>
			<Picker
				selectedValue={selectedCampus}
				style={styles.picker}
				onValueChange={(itemValue) => setSelectedCampus(itemValue)}
			>
				{campuses.map(campus => <Picker.Item label={campus.name} value={campus.id} key={campus.id} />)}
			</Picker>
			<Button title="Save" onPress={() => UpdateCampus()}/>
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