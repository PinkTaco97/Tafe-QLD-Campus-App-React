// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';

// Render the Web View Screen.
function WebViewScreen({ navigation, route }) {

	// The Link passed from the Previous Screen.
	const uri = ''+route.params;
	// alert(uri);

	// Called when Componenet is Rendered.
	useEffect(() => {
		navigation.setOptions({
			headerTitle: uri
		})
	}, [])

    return (
		<SafeAreaView style={styles.container}>
			{/* <Header title="WebView"/> */}
			<WebView source={{uri: uri}}></WebView>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
        // backgroundColor: colors.white,
	},
})

// Export the Component.
export default WebViewScreen;