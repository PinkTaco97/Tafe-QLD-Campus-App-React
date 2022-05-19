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
import BackButton from '../components/BackButton';
import Space from '../components/Space';
import { Alert } from 'react-native-web';

// Render Restaurant Details Screen.
function RestaurantDetailsScreen({ navigation, route }) {

	// The Restaurant Data passed from the Previous Screen.
	const restaurant = route.params;

	// The Events Image.
	const image = { uri: restaurant.image }

	// Called when Componenet is Rendered.
	useEffect(() => {
		navigation.setOptions({
			headerTitle: restaurant.name
		})
	}, [])

    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title={restaurant.name}
					back={true}
					onBack={() => {navigation.navigate("Restaurant");}}
				/>
				<ScrollView style={styles.scrollView}>
					<Image style={styles.image} source={image}/>
					{/* <Text style={styles.title}>{restaurant.name}</Text> */}
					<Text style={styles.content}>{restaurant.description}</Text>
					<Button title="View Menu" onPress={() => navigation.navigate("WebView", restaurant.menuLink)}></Button>
					<Button title="Book a Table" onPress={() => navigation.navigate("WebView", restaurant.bookingLink)}></Button>
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
export default RestaurantDetailsScreen;