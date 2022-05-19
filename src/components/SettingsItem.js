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
				size={40}
				color={colors.dark}
			/>
			<Text style={styles.title}>{title}</Text> 
		</TouchableOpacity>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 150,
		margin: 12.5,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
		overflow: 'hidden',
		borderRadius: 10,
	},
	title: {
		// position: 'absolute',
		height: 25,
		marginTop: 100,
		fontSize: 12,
		color: colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
		// backgroundColor: colors.primary,
	},
    icon: {
		position: 'absolute',
		// top: 25,
		// left: 12.5,
		// height: 75,
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: colors.primary,
		textAlign: 'center',
		textAlignVertical: 'center',
		// borderRadius: 50,
	},
})

// Export the Component.
export default SettingsItem;