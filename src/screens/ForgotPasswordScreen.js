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
import ForgotPasswordForm from '../components/ForgotPasswordForm';

// Render the Forgot Password Screen.
function ForgotPasswordScreen({ navigation }) {

	// Reference to the Screens Background Image.
	const backgroundImage = require('../assets/background.jpg');

    return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={styles.contentWrapper}
				// source={backgroundImage}
			>
				<Header
					title=""
					style={styles.header}
					rightLink={true}
					rightLinkText="Later"
					rightLinkColor="white"
					onRightLink={() => navigation.navigate('Main')}
					back={true}
					onBack={() => {navigation.navigate("Login");}}
				/>
				<ForgotPasswordForm/>
			</ImageBackground>
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
		backgroundColor: colors.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		position: 'absolute',
		top: 0,
	},
	laterLink: {
		alignSelf: 'flex-end',
		height: '100%',
	},
	logo: {
		width: 200,
		height: 200,
	},
})

// Export the Component.
export default ForgotPasswordScreen;