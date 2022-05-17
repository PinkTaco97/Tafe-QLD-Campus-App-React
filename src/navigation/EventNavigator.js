// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import UpcomingEventsScreen from '../screens/UpcomingEventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function EventNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="UpcomingEvents"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_bottom',
			}}
		>
			<Stack.Screen name="UpcomingEvents" component={UpcomingEventsScreen}/>
			<Stack.Screen
				name="EventDetails"
				component={EventDetailsScreen}
				options={{
					presentation: 'modal',
					headerShown: Platform.OS === 'android' ? true : false,
					headerTitle: " ",
				}}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default EventNavigator;