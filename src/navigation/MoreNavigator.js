// Import Thrid Party Libraies.
import React from 'react';
import {
	Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the Application Screens.
import MoreScreen from '../screens/MoreScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ReportBugScreen from '../screens/ReportBugScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import CreditsScreen from '../screens/CreditsScreen';
import CampusFinderScreen from '../screens/CampusFinderScreen';

// Create a Native Stack Navigator.
const Stack = createNativeStackNavigator();

function MoreNavigator(){
	return(
		<Stack.Navigator
			initialRouteName="More"
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name="More" component={MoreScreen}/>
			<Stack.Screen name="Feedback" component={FeedbackScreen}/>
			<Stack.Screen name="ReportBug" component={ReportBugScreen}/>
			<Stack.Screen name="TermsConditions" component={TermsConditionsScreen}/>
			<Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}/>
			<Stack.Screen name="Credits" component={CreditsScreen}/>
			<Stack.Screen name="CampusFinder" component={CampusFinderScreen}/>
      	</Stack.Navigator>
	);
}

// Export the Component.
export default MoreNavigator;