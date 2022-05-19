// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
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
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Space from '../components/Space';
import { Alert } from 'react-native-web';

// Render Event Details Screen.
function EventDetailsScreen({ navigation, route }) {

	// The Event Data passed from the Previous Screen.
	const event = route.params;

	// The Events Image.
	const image = { uri: event.image }

	// The Events Start Date.
	const date = new Date(event.eventStart);

	// The Fomatted Date.
	const formatedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

	// Called when Componenet is Rendered.
	useEffect(() => {
		navigation.setOptions({
			headerTitle: event.title
		})
	}, [])

    return (
        // <EventDetails
		// 	title={event.title}
		// 	content={event.content}
		// 	imageURL={event.image}
		// 	location={event.location}
		// 	startDate={event.eventStart}
		// 	onRegister={navigation.navigate("WebView")}
		//navigation.navigate("WebView", event.registerLink)
		// />
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Image style={styles.image} source={image}/>
				<Text style={styles.location}>{event.location}</Text>
				<Text style={styles.date}>{formatedDate}</Text>
				<Text style={styles.title}>{event.title}</Text>
				<Text style={styles.content}>{event.content}</Text>
				<Button title="Register" onPress={() => navigation.navigate("WebView", event.registerLink)}></Button>
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
		flex: 1,
		flexWrap: 'wrap',
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
export default EventDetailsScreen;