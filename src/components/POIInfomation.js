// Import Thrid Party Libraies.
import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
    View,
    Button,
} from 'react-native';

// Import Custom Compponents.
import colors from '../config/colors';

// Render the Event Screen.
function POIInformation({title, description, Image, onPress}) {
    return (
        <View
			style={styles.container}
		>
			<Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button title="Back" onPress={onPress}/>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.primary,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.light,
	},
    description: {
		fontSize: 20,
		color: colors.light,
	},
})

// Export the Component.
export default POIInformation;