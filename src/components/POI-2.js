// Import Thrid Party Libraies.
import React from 'react';
import {
	ImageBackground,
	Image,
	View,
	SafeAreaView,
	StyleSheet,
	Text,
    ScrollView,
} from 'react-native';

// Import Custom Compponents.
import colors from '../config/colors';
import Button from '../components/Button';
import BackButton from './BackButton';
import Space from './Space';

// Render the Event Screen.
function POI({title, description, imageURL, onPress}) {
	const image = { uri: imageURL }
    return (
        //  <ImageBackground
		//  	style={styles.container}
		//  	source={image}
		//  >
			 
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<BackButton onPress={onPress}/>
				<Text style={styles.title}>{title}</Text>
			</View>
			<ScrollView style={styles.scrollView}>
				
				<Image
					style={styles.image}
					source={image}
					resizeMode="contain"
				/>
				<Text style={styles.description}>{description}</Text>
				<Space height={100}/>
				
			</ScrollView>
		</SafeAreaView>
		//</ImageBackground>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.light,
	},
	header: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: 75,
		padding: 10,
		backgroundColor: colors.white,
		// textAlign: 'center',
		// textAlignVertical: 'center',
	},

	title: {
		height: 75,
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	scrollView: {
		textAlign: 'center',
		top: 75,
		bottom: 100,
		paddingHorizontal: 25,
		// backgroundColor: colors.dark,
	},
	image: {
		width: 300,
		height: 300,
		alignSelf: 'center',
		top: 20,
	},
    description: {
		fontSize: 20,
		color: colors.dark,
		marginVertical: 25,
		textAlign: 'center',
	},
	button: {
		marginVertical: 10,
		marginBottom: 50,
	},
})

// Export the Component.
export default POI;