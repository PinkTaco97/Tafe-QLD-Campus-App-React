// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
    ScrollView,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Compponents.
import Header from '../components/Header';
import Button from '../components/Button';
import Space from '../components/Space';

// Render Facility Details Screen.
function FacilityDetailsScreen({ navigation, route }) {

	// The Facility Data passed from the Previous Screen.
	const facility = route.params;

	// The Events Image.
	const image = { uri: facility.image }

	// Called when Componenet is Rendered.
	useEffect(() => {
		// Print the Facility Data to the console.
		//console.log(facility);

		// Set the Title of the Screen.
		navigation.setOptions({headerTitle: facility.name})
	}, [])

    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title={facility.name}
					back={true}
					onBack={() => {navigation.navigate("Facilities");}}
				/>
				<ScrollView style={styles.scrollView}>
					<Image style={styles.image} source={image}/>
					{/* <Text style={styles.title}>{facility.name}</Text> */}
					<Text style={styles.content}>{facility.description}</Text>
					{
						facility.menuLink.length != 0 ?
							<Button title="View Menu" onPress={() => navigation.navigate("WebView", facility.menuLink)}></Button>
						:
							<></>
					}
					{
						facility.bookingLink.length != 0 ?
							<Button title="Book a Table" onPress={() => navigation.navigate("WebView", facility.bookingLink)}></Button>
						:
							<></>
					}
					<Space height={25}/>
				</ScrollView>
			</View>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: colors.primary,
	},
	contentWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
	},
	image: {
		width: "100%",
		height: 300,
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
		
		width: "100%",
		flex: 1,
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
export default FacilityDetailsScreen;