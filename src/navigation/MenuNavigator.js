// Import Thrid Party Libraies.
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import MenuCategoriesScreen from '../screens/MenuCategoriesScreen';
import MenuItemsScreen from '../screens/MenuItemsScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function MenuNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="MenuCategories"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="MenuCategories" component={MenuCategoriesScreen}/>
			<Stack.Screen name="MenuItems" component={MenuItemsScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default MenuNavigator;