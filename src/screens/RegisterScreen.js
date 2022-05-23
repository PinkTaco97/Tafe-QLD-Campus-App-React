// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	ImageBackground,
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

// Render the Register Screen.
function RegisterScreen({ navigation }) {

	// Reference to the Screens Background Image.
	const backgroundImage = require('../assets/background.jpg');

    return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={styles.contentWrapper}
				// source={backgroundImage}
			>
				<Header
					style={styles.header}
					rightLink={true}
					rightLinkText="Later"
					rightLinkColor="white"
					onRightLink={() => navigation.navigate('Main')}
					back={true}
					onBack={() => {navigation.navigate("Login");}}
				/>
				{/* <Image style={styles.logo} source={require('../assets/logo.png')}/> */}
				<RegisterForm/>
			</ImageBackground>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,
	},
	contentWrapper: {
		flex: 1,
		backgroundColor: colors.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		position: 'absolute',
		top: 0,
	},
	logo: {
		width: 200,
		height: 200,
	},
})

// Export the Component.
export default RegisterScreen;