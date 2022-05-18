// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
	View,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

// Import Config Settings.
import colors from '../config/colors';

// Import UI Components.
import Header from '../components/Header';

// Render the Campus Finder Screen.
function CampusFinderScreen(props) {

	const image = require('../assets/map.png');
	//{uri: "https://tafeqld.edu.au/content/dam/tafe/en/documents/pdfs/campus-maps/far-north-queensland/atherton-campusmap.pdf"}
	//require('../assets/map.png');

    return (
		<View>
			<Header title="Campus Map"/>
			<ImageZoom
				cropWidth={Dimensions.get('window').width}
				cropHeight={Dimensions.get('window').height}
				imageWidth={962}
				imageHeight={1171}
			>
				<Image
					style={{width:962, height:1171}}
					source={image}
				/>
			</ImageZoom>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	
})

// Export the Component.
export default CampusFinderScreen;