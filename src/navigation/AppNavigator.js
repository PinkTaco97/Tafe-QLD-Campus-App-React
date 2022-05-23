// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import {
	NavigationContainer,
	useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Config files.
import colors from '../config/colors';

// Import Navigators.
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

// Import Screens.
import ModalScreen from '../screens/ModalScreen';
import CampusPickerScreen from '../screens/CampusPickerScreen';
import WebViewScreen from '../screens/WebViewScreen';

// Import UI Components.
import Link from '../components/Link';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function AppNavigator(){

	return(
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{
					headerShown: false,
					animation: 'slide_from_bottom',
				}}
			>
				<Stack.Screen name="Main" component={TabNavigator}/>
				<Stack.Screen
					name="Auth"
					component={AuthNavigator}
					options={{
						presentation: 'modal',
						// headerShown: true,
						// headerBackVisible: false,
						// headerTitle: '',
						// headerRight: () => (
						// 	<Link
						// 		title="Later"
						// 		// style={styles.laterLink}
						// 		onPress={() => this.refs.navigation.navigate('Main')}
						// 	/>
						// ),
						//headerShown: Platform.OS === 'android' ? true : false,
						//headerTitle: "Select a Campus",
					}}
				/>
				<Stack.Screen
					name="Modal"
					component={CampusPickerScreen}
					options={{
						presentation: 'modal',
						headerShown: Platform.OS === 'android' ? true : false,
						headerTitle: "Select a Campus",
					}}
				/>
				<Stack.Screen
					name="WebView"
					component={WebViewScreen}
					options={{
						presentation: 'modal',
						// headerShown: Platform.OS === 'android' ? true : false,
						headerTitle: "WebView",
					}}
				/>
      		</Stack.Navigator>
		</NavigationContainer>
	);
}

// Export the Component.
export default AppNavigator;