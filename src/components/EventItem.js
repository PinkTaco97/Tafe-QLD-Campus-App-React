// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
    ScrollView,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Compponents.
import Button from '../components/Button';
import BackButton from './BackButton';
import Space from './Space';

// Render the EventItem Component.
function EventItem({title, description, imageURL, location, startDate, onPress}) {
	const image = { uri: imageURL }
	const date = new Date(startDate);
	const formatedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return ( 
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image style={styles.image} source={image}/>
			<Text style={styles.location}>{location}</Text>
			<Text style={styles.date}>{formatedDate}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</TouchableOpacity>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.white,
		borderRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width: "100%",
		height: 250,
	},
	date: {
		height: 30,
		position: 'absolute',
		top: 10,
		right: 10,
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.black,
		backgroundColor: colors.white,
		paddingHorizontal: 10,
		borderRadius: 15,
		textAlignVertical: 'center',
		overflow: 'hidden',
	},
	location: {
		height: 30,
		position: 'absolute',
		top: 10,
		left: 10,
		fontSize: 15,
		fontWeight: 'bold',
		color: colors.white,
		backgroundColor: colors.primary,
		paddingHorizontal: 10,
		borderRadius: 15,
		textAlignVertical: 'center',
		overflow: 'hidden',
	},
	title: {
		height: 75,
		fontSize: 25,
		fontWeight: 'bold',
		color: colors.dark,
		textAlign: 'center',
		textAlignVertical: 'center',
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
export default EventItem;