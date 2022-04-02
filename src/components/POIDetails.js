// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
    ScrollView,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Render the Point of Interest Component.
function POI({title, description, imageURL, onPress}) {
	const image = { uri: imageURL }
    return ( 
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Image style={styles.image} source={image}/>
				<Text style={styles.title}>"{title}"</Text>
				<Text style={styles.description}>{description}</Text>
			</ScrollView>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
	},
	image: {
		width: "100%",
		height: 400,
	},
	title: {
		height: 50,
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
		marginTop: 10,
	},
	scrollView: {
		backgroundColor: colors.white,
	},
    description: {
		fontSize: 15,
		color: colors.dark,
		backgroundColor: colors.white,
		padding: 25,
		textAlign: 'center',
	},
})

// Export the Component.
export default POI;