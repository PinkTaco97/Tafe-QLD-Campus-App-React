import React from 'react';
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';

function QRScanButton({ onPress }) {
	return(
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<FontAwesome name="qrcode" size={40} color={colors.white}/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		borderColor: colors.white,
		borderRadius: 40,
		borderWidth: 10,
		height: 80,
		width: 80,
		bottom: 25,
	}
})

export default QRScanButton;