// Import Thrid Party Libraies.
import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';
import OnBoardingForm from '../components/OnBoardingForm';

// Render the About You Screen.
function AboutYouScreen() {
    return (
		<View>
			<Header title="Welcome"/>
			<OnBoardingForm/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	
})

// Export the Component.
export default AboutYouScreen;