// Import Thrid Party Libraies.
import React, {
	useContext,
	useState,
} from "react";
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Import Config Settings.
import colors from '../config/colors';

// Import API Layers.
import authAPI from "../api/auth";

// Import UI Compnents.
import Button from './Button';

// Render the Forgot Password Form Component.
function ForgotPasswordForm() {

	// Whether the Email is Valid.
	const [error, setError] = useState(false);

	// Reference to the Navigator.
	const navigation = useNavigation();

	// The Email Adress of the User.
	const [email, setEmail] = useState('');

	// Whether the Email is Valid.
	const [emailValid, setEmailValid] = useState(true);

	// Validate the Data in the Login Form.
	function ValidateForm(){

		// Validate the Form Data.
		if(email.length == 0){
			Alert.alert("Error", "Please enter your email.");
			setEmailValid(false);
			return;
		}
		if(!email.includes('@') || !email.includes('.com')){
			Alert.alert("Error", "Please enter a valid email.");
			setEmailValid(false);
			return;}
		
		forgotPassword()

		

		// TODO: Hash User Password.
		// TODO: Send Email & Password to Server.
		
		setEmail('');
		setEmailValid(true);
	}

	// Validate the Data in the Login Form.
	async function forgotPassword(){
		// Get Respones from API.
		const response = await authAPI.forgotPassword(email);

		// If there was an Error.
		if (!response.ok) {
			// Update the Error state.
			setError(true);

			Alert.alert(
				"Error",
				response.originalError
			);

			// Print the Error to the console.
			console.log(response.originalError);

		} else {
			// Update the Error state.
			setError(false);

			Alert.alert(
				"Success",
				"Please check your email."
			);

			navigation.navigate('Main');
		}
	}

    return ( 
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>Forgot{"\n"}Password?</Text>
				<Text style={styles.description}>Don't worry! It happens. Please enter the email address associated with your account.</Text>
				<View style={styles.input}>
					<FontAwesome
						name="at"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder='Email Address'
						value={email}
						onChangeText={text => setEmail(text)}
						autoCapitalize="none"
					/>
				</View>
				<Button title="Submit" onPress={() => ValidateForm()}/>
			</View>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
	},
	form: {
		width: '100%',
		backgroundColor: colors.white,
		borderRadius: 25,
		padding: 5,
		justifyContent: 'center',
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
		marginVertical: 25,
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
export default ForgotPasswordForm;