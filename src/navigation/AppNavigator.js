// Import Thrid Party Libraies.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import Config files.
import colors from '../config/colors';

// Import Custom UI Compponents.
import QRScanButton from '../components/QRScanButton';

// Import Application Screens.
import EventsScreen from '../screens/EventsScreen';
import MapScreen from '../screens/MapScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Import Navigators.
import QRScanNavigator from './QRScanNavigator';

// Create the Navigator
const Tab = createBottomTabNavigator();

function AppNavigator(){
	return(
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Events"
				screenOptions={{
					tabBarActiveBackgroundColor: colors.primary,
					tabBarActiveTintColor: colors.white,
					tabBarInactiveBackgroundColor: colors.white,
					tabBarInactiveTintColor: colors.dark,
					headerShown: false,
				}}
			>
				<Tab.Screen
					name="Events"
					component={EventsScreen}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="calendar" size={size} color={color}/>
						),
					}}
				/>
        		<Tab.Screen
					name="Map"
					component={MapScreen}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="map" size={size} color={color}/>
						),
					}}
				/>
				<Tab.Screen
					name="QRScan"
					component={QRScanNavigator}
					options={({ navigation }) => ({
						tabBarButton: () => <QRScanButton onPress={() => navigation.navigate("QRScan")}/>,
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="qrcode" size={size} color={color}/>
						),
					})}
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
				<Tab.Screen
					name="Settings"
					component={SettingsScreen}
					options={{
						tabBarIcon: ({size, color}) => (
							<FontAwesome name="cog" size={size} color={color}/>
						),
					}}
				/>
      		</Tab.Navigator>
		</NavigationContainer>
	);
}

// Export the Component.
export default AppNavigator;