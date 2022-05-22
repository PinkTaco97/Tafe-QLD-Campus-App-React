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
import { useNavigation } from '@react-navigation/native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Compnents.
import Button from './Button';
import Link from './Link';

// Render the Login Form Component.
function LoginForm() {

	const navigation = useNavigation();

	// The Email Adress of the User.
	const [email, setEmail] = useState('');

	// The Password of the User.
	const [password, setPassword] = useState('');

    return ( 
		<View style={styles.container}>
			<View style={styles.form}>
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
				<View style={styles.input}>
					<FontAwesome
						name="lock"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder='Password'
						value={password}
						onChangeText={text => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry
					/>
				</View>
				<Link
					title="Forgot Password?"
					style={styles.forgotPasswordLink}
					onPress={() => navigation.navigate('ForgotPassword')}
				/>
				<Button title="Login" onPress={() => navigation.navigate('Main')}/>
				<Text style={styles.label}>Don't have an account?</Text>
				<Link
					title="Register"
					style={styles.registerLink}
					onPress={() => navigation.navigate('Register')}
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
	input:{
		// flex: 1,
		flexDirection:'row',
		// marginTop:10,
		// paddingBottom:5,
		justifyContent: 'center',
		marginHorizontal: 15,
		marginVertical:10,
		//
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

		//ALT Style:
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
export default LoginForm;