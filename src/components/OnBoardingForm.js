// Import Thrid Party Libraies.
import React, {
	useContext,
	useEffect,
	useState,
	componentDidMount,
} from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config Settings.
import colors from '../config/colors';

// Import Context.
import ProfileContext from '../context/ProfileContext';

// Import Storage.
import profileStorage from '../storage/ProfileStorage';

// Import API Layers.
import campusAPI from '../api/campus';
import profileAPI from '../api/profile';

// Import UI Compnents.
import Button from './Button';
import Space from './Space';

// Render the On Boarding Form Component.
function OnBoardingForm() {

	// Reference to the Navigator.
	const navigation = useNavigation();

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// Reference to the Users Profile.
	const profileContext = useContext(ProfileContext);

	// The Industries loaded from the Database.
	const [industries, setIndustries] = useState([]);

	// The Regions loaded from the Database.
	const [regions, setRegions] = useState([]);

	// The Campuses loaded from the Database.
	const [campuses, setCampuses] = useState([]);

	// The Selected Type.
	const [selectedType, setSelectedType] = useState('S');

	// The Selected Industry.
	const [selectedIndustry, setSelectedIndustry] = useState(1);

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

	// Get all Campuses for a given region from the API.
	const GetCampuses = async (region) => {
		
		// Clear the Campus list.
		setCampuses([]);
		
		// Get Respones from API.
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

	// Send the Profile to the API.
	const PostProfile = async (profile) => {
		
		// Get Respone from API.
		const response = await profileAPI.createProfile(profile);

		// If there was an Error.
		if(!response.ok) return setError(true);

		// Update the Error state.
		setError(false);

		// Store the Users Profile in Local Storage.
		profileStorage.storeProfile(response.data);

		// Redirect the User to the Main Navigator.
		navigation.navigate("Main");
	}


	// Form Submit Callback
	function handleSubmit(){

		// Create a Profile object from the Form Data.
		const profile = {
			'type': selectedType,
			'industry': selectedIndustry,
			'region': selectedRegion,
			'campus': selectedCampus,
		}

		// Print the profile Object on the console.
		//console.log(profile);

		// Send the Profile to the API.
		PostProfile(profile);
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
					onValueChange={(itemValue) => { setSelectedType(itemValue); }}
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
					onValueChange={(itemValue) => { setSelectedIndustry(itemValue); }}
				>
					<Picker.Item label="Business" value={1} key={1} />
					<Picker.Item label="Creative Industries" value={2} key={2} />
					<Picker.Item label="Education & Community" value={3} key={3} />
					<Picker.Item label="Environment & Animal Services" value={4} key={4} />
					<Picker.Item label="Health & Science" value={5} key={5} />
					<Picker.Item label="Information Technology" value={6} key={6} />
					<Picker.Item label="Infrastructure & Transport" value={7} key={7} />
					<Picker.Item label="Service Industries" value={8} key={8} />
					<Picker.Item label="Trades" value={9} key={9} />
				</Picker>
				<Text style={styles.heading}>My Region:</Text>
				<Picker
					selectedValue={selectedRegion}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue) => { setSelectedRegion(itemValue); }}
				>
					{regions.map(region => <Picker.Item label={region.name} value={region.id} key={region.id}/>)}
				</Picker>
				<Text style={styles.heading}>My Campus:</Text>
				<Picker
					selectedValue={selectedCampus}
					style={styles.picker}
					itemStyle={styles.pickerItem}
					onValueChange={(itemValue) => { setSelectedCampus(itemValue); }}
				>
					{campuses.map(campus => <Picker.Item label={campus.name} value={campus.id} key={campus.id} />)}
				</Picker>
				<Button title="Continue" onPress={() => handleSubmit()}/>
			</View>
			<Space height={125}/>
		</ScrollView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
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