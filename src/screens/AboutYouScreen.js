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

// Render the About You Screen.
function AboutYouScreen() {
    return (
		<View>
			<Header title="About You"/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	
})

// Export the Component.
export default AboutYouScreen;