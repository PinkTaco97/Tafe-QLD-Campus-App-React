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

// Import UI Compponents.
import Button from './Button';
import BackButton from './BackButton';
import Space from './Space';

// Render the Event Details Component.
function EventDetails({title, content, imageURL, location, startDate, onRegister}) {
	const image = { uri: imageURL }
	const date = new Date(startDate);
	const formatedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return ( 
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Image style={styles.image} source={image}/>
				<Text style={styles.location}>{location}</Text>
				<Text style={styles.date}>{formatedDate}</Text>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.content}>{content}</Text>
				<Button title="Register" onPress={onRegister}></Button>
				<Space height={25}/>
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
		borderRadius: 25,
		textAlignVertical: 'center',
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
		borderRadius: 25,
		textAlignVertical: 'center',
	},
	title: {
		height: 75,
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
    content: {
		fontSize: 15,
		color: colors.dark,
		backgroundColor: colors.white,
		padding: 25,
		textAlign: 'center',
	},
})

// Export the Component.
export default EventDetails;