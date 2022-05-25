// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config Settings.
import colors from '../config/colors';

// Import API Components.
import campusApi from '../api/campus';

// Import UI Compnents.
import Button from './Button';
import Link from './Link';
import Space from './Space';

// Render the On Boarding Form Component.
function OnBoardingForm() {

	// Reference to the Navigator.
	const navigation = useNavigation();

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// The Industries loaded from the Database.
	const [industries, setIndustries] = useState([]);

	// The Regions loaded from the Database.
	const [regions, setRegions] = useState([]);

	// The Campuses loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	// The Selected Type.
	const [selectedType, setSelectedType] = useState('S');

	// The Selected Industry.
	const [selectedIndustry, setSelectedIndustry] = useState(0);

	// The Selected Region.
	const [selectedRegion, setSelectedRegion] = useState(0);

	// The Selected Campus.
	const [selectedCampus, setSelectedCampus] = useState(0);

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

	// Validate the Data.
	function ValidateForm(){

	}

    return ( 
		<ScrollView style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>Tell us about you.</Text>
				<Text style={styles.description}>Let us get to know you! This information will personalise your experience.</Text>
				<Text style={styles.heading}>I am a:</Text>
				<Picker
					selectedValue={selectedType}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue, itemIndex) => {
						console.log("Selected Type: " + itemValue);
						setSelectedType(itemValue);
					}}
				>
					<Picker.Item label="Student" value={'S'} key={0} />
					<Picker.Item label="Parent/Guardian" value={'P'} key={1} />
					<Picker.Item label="Teacher" value={'T'} key={2} />
					<Picker.Item label="Career Starter" value={'CS'} key={3} />
					<Picker.Item label="Career Changer" value={'CC'} key={4} />
				</Picker>
				<Text style={styles.heading}>My Industry:</Text>
				<Picker
					selectedValue={selectedIndustry}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue, itemIndex) => {
						console.log("Selected Type: " + itemValue);
						setSelectedIndustry(itemValue);
					}}
				>
					<Picker.Item label="Business" value={0} key={0} />
					<Picker.Item label="Creative Industries" value={1} key={1} />
					<Picker.Item label="Education & Community" value={2} key={2} />
					<Picker.Item label="Environment & Animal Services" value={3} key={3} />
					<Picker.Item label="Health & Science" value={4} key={4} />
					<Picker.Item label="Information Technology" value={5} key={5} />
					<Picker.Item label="Infrastructure & Transport" value={6} key={6} />
					<Picker.Item label="Service Industries" value={7} key={7} />
					<Picker.Item label="Trades" value={8} key={8} />
				</Picker>
				<Text style={styles.heading}>My Region:</Text>
				<Picker
					selectedValue={selectedRegion}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue, itemIndex) => {
						console.log("Selected Region: " + itemValue);
						setSelectedRegion(itemValue);
					}}
				>
					{regions.map(region => <Picker.Item label={region.name} value={region.id} key={region.id}/>)}
				</Picker>
				<Text style={styles.heading}>My Campus:</Text>
				<Picker
					selectedValue={selectedCampus}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue, itemIndex) => {
						console.log("Selected Campus: " + itemValue);
						setSelectedCampus(itemValue);
					}}
				>
					{campuses.map(campus => <Picker.Item label={campus.name} value={campus.id} key={campus.id} />)}
				</Picker>
				<Button title="Continue" onPress={() => navigation.navigate('Main')}/>
			</View>
			<Space height={125}/>
		</ScrollView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
		// alignItems: 'center',
		// justifyContent: 'center',
		padding: 15,
	},
	form: {
		width: '100%',
		backgroundColor: colors.white,
		borderRadius: 25,
		padding: 5,
		justifyContent: 'center',
	},
	heading: {
		marginTop: 10,
		marginHorizontal: 15,
		padding: 5,
		fontSize: 15,
	},
	picker: {
		maxHeight: 75,
		marginHorizontal: 15,
		padding: 10,
		backgroundColor: colors.light,
		overflow: 'hidden',
	},
	pickerItem: {
		maxHeight: 75,
		marginBottom: 15,
		marginHorizontal: 15,
		padding: 10,
		backgroundColor: colors.light,
		overflow: 'hidden',
	},
	title: {
		color: colors.dark,
		fontSize: 35,
		fontWeight: 'bold',
		paddingLeft: 15,
		paddingTop: 15,
	},
	description: {
		color: colors.dark,
		fontSize: 14,
		padding: 15,
	},
	input:{
		flexDirection:'row',
		justifyContent: 'center',
		marginHorizontal: 15,
		marginVertical:10,
		borderBottomColor: colors.light,
		borderBottomWidth: 2,
	},
	icon:{
		alignSelf: 'center',
		padding: 5,
		width: 30,
	},
	textInput: {
		flex:1,
		color: colors.dark,
		padding: 10,

		// ALT Style:
		// backgroundColor: colors.light,
		// marginHorizontal: 15,
		// marginVertical:10,
		// borderRadius: 10,
	},
	label: {
		color: colors.dark,
		fontSize: 15,
		alignSelf: 'center',
	},
	forgotPasswordLink: {
		alignSelf: 'flex-end',
	},
	registerLink: {
		alignSelf: 'center',
	},
})

// Export the Component.
export default OnBoardingForm;