// Import Thrid Party Libraies.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import FacilitiesScreen from '../../src/screens/FacilitiesScreen';
import FacilityDetailsScreen from '../../src/screens/FacilityDetailsScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function FacilityNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="Facilities"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="Facilities" component={FacilitiesScreen}/>
			<Stack.Screen name="FacilityDetails" component={FacilityDetailsScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default FacilityNavigator;