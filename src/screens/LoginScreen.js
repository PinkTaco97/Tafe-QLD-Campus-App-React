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
import Link from '../components/Link';
import LoginForm from '../components/LoginForm';

// Render the Login Screen.
function LoginScreen({ navigation }) {

	// Reference to the Screens Background Image.
	const backgroundImage = require('../assets/background.jpg');

    return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={styles.contentWrapper}
				source={backgroundImage}
			>
				{/* <View style={styles.header}>
					<Link
						title="Later"
						style={styles.laterLink}
						onPress={() => navigation.navigate('Main')}
					/>
				</View> */}
				{/* <Header title="Login"/> */}
				<Image style={styles.logo} source={require('../assets/logo.png')}/>
				<LoginForm/>
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
		width: '100%',
		height: 75,
		position: 'absolute',
		backgroundColor: colors.white,
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
export default LoginScreen;