// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
	SafeAreaView,
} from 'react-native';
import MapView from 'react-native-maps';
import ImageZoom from 'react-native-image-pan-zoom';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';

// Render the Campus Finder Screen.
function CampusFinderScreen({ navigation }) {

	const image = require('../assets/map.png');
	//{uri: "https://tafeqld.edu.au/content/dam/tafe/en/documents/pdfs/campus-maps/far-north-queensland/atherton-campusmap.pdf"}
	//require('../assets/map.png');

    return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header
					title="Campus Finder"
					back={true}
					onBack={() => {navigation.navigate("More");}}
				/>
				<MapView style={styles.map} />
				{/* <ImageZoom
					cropWidth={Dimensions.get('window').width}
					cropHeight={Dimensions.get('window').height}
					imageWidth={962}
					imageHeight={1171}
				>
					<Image
						style={{width:962, height:1171}}
						source={image}
					/>
				</ImageZoom> */}
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
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
})

// Export the Component.
export default CampusFinderScreen;