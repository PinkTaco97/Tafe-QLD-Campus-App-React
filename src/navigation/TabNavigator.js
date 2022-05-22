// Import Thrid Party Libraies.
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import Config files.
import colors from '../config/colors';

// Import Custom UI Compponents.
import QRScanButton from '../components/QRScanButton';

// Import Application Screens.

// Import Navigators.
import EventNavigator from './EventNavigator';
import SDGNavigator from './SDGNavigator';
import QRScanNavigator from './QRScanNavigator';
import FoodNavigator from './FoodNavigator';
import MoreNavigator from './MoreNavigator';

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
				name="EventsTab"
				component={EventNavigator}
				options={{
					tabBarLabel: "Events",
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="calendar" size={size} color={color}/>
					),
				}}
			/>
        	<Tab.Screen
				name="SDGTab"
				component={SDGNavigator}
				options={{
					tabBarLabel: "Sustainability",
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="globe" size={size} color={color}/>
					),
				}}
			/>
			<Tab.Screen
				name="QRScanTab"
				component={QRScanNavigator}
				options={({ navigation }) => ({
					tabBarLabel: "QRScan",
					tabBarButton: () => <QRScanButton onPress={() => navigation.navigate("QRScanTab")}/>,
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="qrcode" size={size} color={color}/>
					),
				})}
			/>
			<Tab.Screen
				name="FoodTab"
				component={FoodNavigator}
				options={{
					tabBarLabel: "Facilites",
					tabBarIcon: ({size, color}) => (
						<FontAwesome name="building-o" size={size} color={color}/>
					),
				}}
			/>
			<Tab.Screen
				name="MoreTab"
				component={MoreNavigator}
				options={{
					tabBarLabel: "More",
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