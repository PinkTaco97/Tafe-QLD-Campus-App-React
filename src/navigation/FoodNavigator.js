// Import Thrid Party Libraies.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import RestaurantScreen from '../../src/screens/RestaurantScreen';
import RestaurantDetailsScreen from '../../src/screens/RestaurantDetailsScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function FoodNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="Restaurant"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="Restaurant" component={RestaurantScreen}/>
			<Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default FoodNavigator;