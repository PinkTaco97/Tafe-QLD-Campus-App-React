// Import Thrid Party Libraies.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import Custom Compponents.
import colors from '../config/colors';

// Import Application Screens.
import EventScreen from '../screens/EventScreen';
import QRScanScreen from '../screens/QRScanScreen';
import MenuScreen from '../screens/MenuScreen';

// Import Navigators.
import QRScanNavigator from './QRScanNavigator';

// Create the Navigator
const Tab = createBottomTabNavigator();

function AppNavigator(){
	return(
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="QRScan"
				screenOptions={{
					tabBarActiveBackgroundColor: colors.primary,
					tabBarActiveTintColor: colors.light,
					tabBarInactiveBackgroundColor: colors.light,
					tabBarInactiveTintColor: colors.dark,
					headerShown: false,
					animation: 'slide_from_right',
				}}
			>
        		<Tab.Screen
					name="Events"
					component={EventScreen}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="calendar" size={size} color={color}/>
						),
					}}
				/>
				<Tab.Screen
					name="QRScan"
					component={QRScanNavigator}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="qrcode" size={size} color={color}/>
						),
					}}
				/>
				<Tab.Screen
					name="Menu"
					component={MenuScreen}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="cutlery" size={size} color={color}/>
						),
					}}
				/>
      		</Tab.Navigator>
		</NavigationContainer>
	);
}

// Export the Component.
export default AppNavigator;