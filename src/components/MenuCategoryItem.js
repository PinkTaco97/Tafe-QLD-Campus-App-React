// Import Thrid Party Libraies.
import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Render the Menu Category Item Component.
function MenuCategoryItem({name, imageURL, onPress}) {
	const image = { uri: imageURL }
    return ( 
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<ImageBackground
				style={styles.background}
				source={image}
			>
				<Text style={styles.title}>{name}</Text>
			</ImageBackground>
		</TouchableOpacity>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: '100%',
		// maxWidth: '50%',
		height: 250,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
		borderRadius: 10,
		overflow: 'hidden',
	},
	background: {
		width: "100%",
		height: "100%",
	},
	title: {
		position: 'absolute',
		bottom: 0,
		width: "100%",
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.dark,
		backgroundColor: colors.white,
		textAlignVertical: 'bottom',
		padding: 10,
	},
	scrollView: {
		backgroundColor: colors.white,
	},
    description: {
		fontSize: 15,
		color: colors.dark,
		backgroundColor: colors.white,
		padding: 15,
		textAlign: 'center',
	},
})

// Export the Component.
export default MenuCategoryItem;