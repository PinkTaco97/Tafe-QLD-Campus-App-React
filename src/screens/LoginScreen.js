// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

// Render the Login Screen.
function LoginScreen({ navigation }) {
    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header title="Login"/>
				<Image style={styles.logo} source={require('../assets/logo.png')}/>
				<LoginForm/>
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
		backgroundColor: colors.light,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 200,
		height: 200,
	},
})

// Export the Component.
export default LoginScreen;