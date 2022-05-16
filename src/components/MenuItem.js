// Import Thrid Party Libraies.
import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Render the Menu Category Item Component.
function MenuItem({name, price}) {
    return ( 
		<View style={styles.container}>
			<Text style={styles.title}>{name} ${price}</Text>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
		borderRadius: 10,
		overflow: 'hidden',
		padding: 15,
	},
	title: {
		fontSize: 15,
		color: colors.dark,
		textAlign: 'center',
	},
    price: {
		fontSize: 15,
		color: colors.dark,
		padding: 15,
		textAlign: 'center',
	},
})

// Export the Component.
export default MenuItem;