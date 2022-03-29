// Import Thrid Party Libraies.
import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
} from 'react-native';

// Import Custom Compponents.
import colors from '../config/colors';

// Render the Event Screen.
function EventScreen(props) {
    return (
        <ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<Text style={styles.heading}>Events</Text>
		</ImageBackground>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	background: {
		flex: 1,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.light,
	},
})

// Export the Component.
export default EventScreen;