// Import Thrid Party Libraies.
import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import Configuration Settings.
import colors from '../config/colors';

/**
 * @param {function} onPress The function called when the Button is Pressed.
 */
 function BackButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<FontAwesome name="arrow-left" size={30} color={colors.dark}/>
		</TouchableOpacity>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		top: 0,
		left: 0,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		margin: 15,
		zIndex: 1,
	},
})


// Export the Component.
export default BackButton;