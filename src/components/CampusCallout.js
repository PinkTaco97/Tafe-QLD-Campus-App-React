// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
    ScrollView,
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Compponents.
import Button from '../components/Button';
import BackButton from './BackButton';
import Space from './Space';

// Render the Campus Callout Component.
function CampusCallout({name, imageURL, onPress}) {
	//https://tafeqld.edu.au/content/dam/tafe/en/campuses/coomera/gold-coast_coomera-campus-aerial_1920x1080.jpg
	//const image = { uri: imageURL }
	const image = { uri: 'https://tafeqld.edu.au/content/dam/tafe/en/campuses/coomera/gold-coast_coomera-campus-aerial_1920x1080.jpg' }
    return ( 
		<View style={styles.container} onPress={onPress}>
			<Text style={styles.title}>{name}</Text>
			<ImageBackground  style={styles.image} source={image}/>
			
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		// flex: 1,
		width: 250,
		height: 250,
		// alignItems: 'center',
		// justifyContent: 'center',
        backgroundColor: colors.light,
		borderRadius: 10,
		overflow: 'hidden',
		// margin: 25,
	},
	image: {
		width: 50,
		height: 50,
		// backgroundColor: colors.primary,
	},
	
	title: {
		height: 75,
		width: 250,
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
		backgroundColor: colors.white,
	},
})

// Export the Component.
export default CampusCallout;