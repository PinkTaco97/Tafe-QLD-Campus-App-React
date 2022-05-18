// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import MoreScreen from '../screens/MoreScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function MoreNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="More"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="More" component={MoreScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default MoreNavigator;