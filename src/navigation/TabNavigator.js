// Import Thrid Party Libraies.
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import Config files.
import colors from '../config/colors';

// Import Custom UI Compponents.
import QRScanButton from '../components/QRScanButton';

// Import Application Screens.
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Import Navigators.
import EventNavigator from './EventNavigator';
import SDGNavigator from './SDGNavigator';
import QRScanNavigator from './QRScanNavigator';
import FoodNavigator from './FoodNavigator';
import MenuNavigator from './MenuNavigator';

// Create the Navigator
const Tab = createBottomTabNavigator();


function TabNavigator(){
	return(
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
				component={EventNavigator}
				options={{
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="calendar" size={size} color={color}/>
					),
				}}
			/>
        	<Tab.Screen
				name="SDG"
				component={SDGNavigator}
				options={{
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="globe" size={size} color={color}/>
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
				name="Food"
				component={FoodNavigator}
				options={{
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="cutlery" size={size} color={color}/>
					),
				}}
			/>
			<Tab.Screen
				name="More"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="th-large" size={size} color={color}/>
					),
				}}
			/>
     	</Tab.Navigator>
	);
}

// Export the Component.
export default TabNavigator;