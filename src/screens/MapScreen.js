// Import Thrid Party Libraies.
import React from 'react';
import {
	Image,
	Dimensions,
	StyleSheet,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

// Import Custom Compponents.
import colors from '../config/colors';

// Render the Map Screen.
function MapScreen(props) {

	const image = require('../assets/map.png');
	//{uri: "https://tafeqld.edu.au/content/dam/tafe/en/documents/pdfs/campus-maps/far-north-queensland/atherton-campusmap.pdf"}
	//require('../assets/map.png');

    return (
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
    );
}

// Style the Components.
const styles = StyleSheet.create({
	background: {
		flex: 1,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.light,
	},
})

// Export the Component.
export default MapScreen;