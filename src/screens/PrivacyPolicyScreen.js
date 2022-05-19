// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';

// Render the Privacy Policy Screen.
function PrivacyPolicyScreen({ navigation }) {
    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Privacy Policy"
					back={true}
					onBack={() => {navigation.navigate("More");}}
				/>
			</View>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	contentWrapper: {
		flex: 1,
		backgroundColor: colors.light,
	},
})

// Export the Component.
export default PrivacyPolicyScreen;