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

// Render the Report a Bug Screen.
function ReportBugScreen({ navigation }) {
    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Report a Bug"
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
export default ReportBugScreen;