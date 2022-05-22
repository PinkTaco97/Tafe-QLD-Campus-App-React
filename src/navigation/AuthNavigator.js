// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

// Import UI Components.
import Link from '../components/Link';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function AuthNavigator({ navigation }){
	return(
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerShown: false,
				headerBackVisible: false,
				headerTitle: '',
				animation: 'slide_from_right',
				headerRight: () => (
					<Link
						title="Later"
						// style={styles.laterLink}
						onPress={() => navigation.navigate('Main')}
					/>
				),
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen}/>
			<Stack.Screen name="Register" component={RegisterScreen}/>
			<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
		</Stack.Navigator>
	);
}

// Export the Component.
export default AuthNavigator;