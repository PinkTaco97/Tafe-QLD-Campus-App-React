// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator,
	Image,
	SafeAreaView,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect  } from '@react-navigation/native'

// Import Custom Compponents.
import colors from '../config/colors';

// Render the Scan Screen.
function QRScanScreen({ navigation, route }) {

	// Whether the App has Permission to Access the Camera.
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	
	// Whether the App is Scanning for a QR Code.
	const [scanning, setScanning] = useState(true);
	
	// Request Camera Permission from the User.
	const RequestCameraPermission = () => {
		(async () => {
			const {status } = await BarCodeScanner.requestPermissionsAsync();
			setHasCameraPermission(status === 'granted');
		})()
	}

	// Called when a Barcode is Scanned.
	const onBarCodeScanned = ({ type, data }) => {
		setScanning(false);
		navigation.navigate("Info", data);
	};

	// Called when Componenet is Rendered.
	useEffect(() => {
		RequestCameraPermission();
	}, []);

	// Called when the Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			setScanning(true);
		}, [])
	);

    return (
        <SafeAreaView style={styles.container}>
			{ hasCameraPermission === null ?
				<View style={styles.container}>
					<ActivityIndicator size="large" color={colors.primary} />
				</View> :
				hasCameraPermission === false ?
				<View style={styles.container}>
					<Text style={styles.heading}>Please allow access to Camera</Text>
					<Button title='Allow Camera' color={colors.primary} onPress={() => RequestCameraPermission()}/>
				</View> :
				<View style={[StyleSheet.absoluteFillObject, styles.barcodeContainer]}>
					<View style={styles.guideContainer}>
						
						<Text style={styles.text}>Scan QR Code</Text>
						<Image
							style={styles.guide}
							source={require("../assets/guide.png")}
						/>
					</View>
					<BarCodeScanner
						onBarCodeScanned={!scanning ? undefined : onBarCodeScanned}
						style={StyleSheet.absoluteFillObject}
					/>
				</View>
				
			}
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.dark,
	},
	guideContainer: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
	},
	guide: {
		width: 250,
		height: 250,
		marginTop: 0,
		
	},
	text: {
		position: 'absolute',
		top: 50,
		padding: 10,
		borderRadius: 25,
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.light,
		backgroundColor: colors.primary,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	heading: {
		fontSize: 20,
		padding: 15,
		marginVertical: 25,
		color: colors.dark,
		backgroundColor: colors.light,
		borderRadius: 25,
		textAlign: 'center'
	},
})

// Export the Component.
export default QRScanScreen;