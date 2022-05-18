// Import Thrid Party Libraies.
import React from 'react';
import {
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

// Import Configuration Settings.
import colors from '../config/colors';

/**
 * @param {string} title The Text displayed inside of the Button.
 * @param {string} color The background color of the Button.
 * @param {function} onPress The function called when the Button is Pressed.
 */
 function Button({title, color = 'primary', onPress}) {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	button: {
		// width: '100%',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		margin: 15,
		marginVertical: 10,
	},
	text: {
		color: colors.light,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
})


// Export the Component.
export default Button;