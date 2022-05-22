// Import Thrid Party Libraies.
import React,
{
	useState,
}
from 'react';
import {
	Alert,
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Compnents.
import Button from './Button';
import Link from './Link';

// Render the Login Form Component.
function LoginForm() {

	// The Email Adress of the User.
	const [email, setEmail] = useState('');

	// The Password of the User.
	const [password, setPassword] = useState('');

    return ( 
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder='Email Address'
					value={email}
					onChangeText={text => setEmail(text)}
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholder='Password'
					value={password}
					onChangeText={text => setPassword(text)}
					autoCapitalize="none"
					secureTextEntry
				/>
				<Link
					title="Forgot Password?"
					style={styles.forgotPasswordLink}
					onPress={() => Alert.alert('Message','Forgot Password!')}
				/>
				<Button title="Login" onPress={() => Alert.alert('Email:',email)}/>
				<Text style={styles.label}>Don't have an account?</Text>
				<Link
					title="Register"
					style={styles.registerLink}
					onPress={() => Alert.alert('Message','Register Here')}
				/>
				{/* <Button title="Create an Account" onPress={() => Alert.alert('Password:',password)} color='secondary' ></Button> */}
			</View>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		//flex: 1,
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
	input: {
		color: colors.dark,
		backgroundColor: colors.light,
		padding: 10,
		marginHorizontal: 15,
		marginVertical:10,
		borderRadius: 10,
	},
	label: {
		//backgroundColor: colors.light,
		color: colors.dark,
		// padding: 10,
		// marginHorizontal: 15,
		fontSize: 15,
		//textAlignVertical: 'center',
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
export default LoginForm;