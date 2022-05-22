// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';

// Render the Register Screen.
function RegisterScreen({ navigation }) {
    return (
		<View>
			<Header
				title="Register"
				back={true}
				onBack={() => {navigation.navigate("Login");}}
			/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	
})

// Export the Component.
export default RegisterScreen;