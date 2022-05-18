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

// Render the Login Screen.
function LoginScreen() {
    return (
		<View>
			<Header title="Login"/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	
})

// Export the Component.
export default LoginScreen;