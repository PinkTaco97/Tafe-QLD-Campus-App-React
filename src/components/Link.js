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
 * @param {style} style Custom styling applied to the componnent.
 * @param {function} onPress The function called when the Button is Pressed.
 */
 function Link({title, color = 'primary', onPress, style}) {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={[styles.text, {color: colors[color]}]}>{title}</Text>
		</TouchableOpacity>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	button: {
		//borderRadius: 10,
		// justifyContent: 'center',
		//alignItems: 'baseline',
		padding: 5,
		//margin: 5,
		//backgroundColor: colors.light,
		//marginVertical: 10,
		marginHorizontal: 15,
		//alignSelf: 'flex-end'
	},
	text: {
		fontSize: 15,
		fontWeight: 'bold',
		//alignSelf: 'center',
	},
})


// Export the Component.
export default Link;