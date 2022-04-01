// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Navigator Screens.
import QRScanScreen from '../screens/QRScanScreen';
import POIScreen from '../screens/POIScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function QRScanNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="Scan"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_bottom',
			}}
		>
			<Stack.Screen name="Scan" component={QRScanScreen}/>
			<Stack.Screen
				name="Info"
				component={POIScreen}
				options={{
					presentation: 'modal',
					headerShown: Platform.OS === 'android' ? true : false,
					headerTitle: " ",
				}}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default QRScanNavigator;