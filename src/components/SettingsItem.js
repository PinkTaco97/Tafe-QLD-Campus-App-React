// Import Thrid Party Libraies.
import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import Config Settings.
import colors from '../config/colors';

// Render the Settings Item Component.
function SettingsItem({title, icon, onPress}) {
    return ( 
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<FontAwesome
				style={styles.icon}
				name={icon}
				size={30}
				color={colors.dark}
			/>
			<Text style={styles.title}>{title}</Text> 
		</TouchableOpacity>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 75,
		// alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
		overflow: 'hidden',
	},
	title: {
		height: 75,
		marginLeft: 75,
		fontSize: 15,
		color: colors.dark,
		textAlign: 'left',
		textAlignVertical: 'center',
	},
    icon: {
		position: 'absolute',
		top: 12.5,
		left: 12.5,
		height: 50,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: colors.primary,
		textAlign: 'center',
		textAlignVertical: 'center',
		borderRadius: 50,
	},
})

// Export the Component.
export default SettingsItem;