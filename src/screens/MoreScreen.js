// Import Thrid Party Libraies.
import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	FlatList,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';
import Button from '../components/Button';
import Space from '../components/Space';
import SettingsItem from '../components/SettingsItem';

// List of More Pages.
const settings = [
	{
		"title": "Change Campus",
		"screen": "Modal",
		"icon": "map-marker",
	},
	{
		"title": "Send Feedback",
		"screen": "Feedback",
		"icon": "comment",
	},
	{
		"title": "Report a Bug",
		"screen": "ReportBug",
		"icon": "bug",
	},
	{
		"title": "Terms & Conditions",
		"screen": "TermsConditions",
		"icon": "info-circle",
	},
	{
		"title": "Privacy Policy",
		"screen": "PrivacyPolicy",
		"icon": "warning",
	},
	{
		"title": "Credits",
		"screen": "Credits",
		"icon": "group",
	},
	{
		"title": "Campus Finder",
		"screen": "CampusFinder",
		"icon": "map-marker",
	},
]

// Render the More Screen.
function MoreScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header title="More"/>
				<FlatList
					style={styles.scrollView}
					data={settings}
					numColumns={2}
					keyExtractor={setting => setting.title}
					renderItem={({ item }) =>
						<SettingsItem
							title={item.title}
							icon={item.icon}
							onPress={() => navigation.navigate(item.screen)}
						/>
					}
					ItemSeparatorComponent={() =>
						<Space height={10}/>
					}
					ListHeaderComponent={() =>
						// <Space height={10}/>
						<SettingsItem
							title='Login'
							icon={'user'}
							onPress={() => navigation.navigate('Auth')}
						/>
					}
					ListFooterComponent={() =>
						<Space height={55}/>
					}
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
export default MoreScreen;