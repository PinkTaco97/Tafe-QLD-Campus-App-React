// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import SDGScreen from '../../src/screens/SDGScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function AuthNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="Login" component={SDGScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default AuthNavigator;