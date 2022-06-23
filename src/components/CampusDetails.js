// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	SafeAreaView,
    View,
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
import OpeningHours from "../components/OpeningHours";

// Render the Campus Details Component.
function CampusDetails({campus}) {
    // console.log(campus);
    const image = { uri: campus.address }
    return ( 
		<View style={styles.container}>
			<Text style={styles.title}>{campus.name}</Text>
            <Image style={styles.image} source={image}/>
			<Text style={styles.description}>{campus.description}</Text>
            <OpeningHours hours={campus.hours} />
			<Space height={25}/>
		</View>
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
        width: '100%',
		height: 50,
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
		padding: 25,
		textAlign: 'center',
	},
})

// Export the Component.
export default CampusDetails;