// Import Thrid Party Libraies.
import React from 'react';
import {
	StyleSheet,
	View,
	FlatList,
} from 'react-native';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';
import Button from '../components/Button';
import Space from '../components/Space';
import SettingsItem from '../components/SettingsItem';

// List of Settings Pages.
const settings = [
	{
		"title": "Change Campus",
		"screen": "Modal",
		"icon": "map-marker",
	},
	{
		"title": "Send Feedback",
		"screen": "",
		"icon": "comment",
	},
	{
		"title": "Report a Bug",
		"screen": "",
		"icon": "bug",
	},
	{
		"title": "Terms & Conditions",
		"screen": "",
		"icon": "info-circle",
	},
	{
		"title": "Privacy Policy",
		"screen": "",
		"icon": "warning",
	},
	{
		"title": "Credits",
		"screen": "",
		"icon": "group",
	},
]

// Render the Settings Screen.
function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
			<Header title="Settings"/>
			<FlatList
				style={styles.scrollView}
				data={settings}
				// numColumns={2}
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
					<Space height={10}/>
				}
				ListFooterComponent={() =>
					<Space height={55}/>
				}
			/>
			{/* {settings.map(setting => <SettingsItem title={setting.title} icon={setting.icon} onPress={() => navigation.navigate(setting.screen)} />)} */}
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

// Export the Component.
export default SettingsScreen;