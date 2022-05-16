// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	Image,
	SafeAreaView,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect  } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

// Import Custom Compponents.
import colors from '../config/colors';
import Button from '../components/Button';

// Render the QR Scan Screen.
function QRScanScreen({ navigation, route }) {

	// Whether the App has Permission to Access the Camera.
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	
	// Whether the App is Scanning for a QR Code.
	const [scanned, setScanned] = useState(false);
	
	// Request Camera Permission from the User.
	const RequestCameraPermission = () => {
		(async () => {
			const {status } = await BarCodeScanner.requestPermissionsAsync();
			setHasCameraPermission(status === 'granted');
		})()
	}

	// Called when a Barcode is Scanned.
	const onBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		//console.log("Barcode Scanned: (Type: " + type + ") (Data: " + data + ")");
		navigation.navigate("Info", data);
	};

	// Called when Componenet is Rendered.
	useEffect(() => {
		RequestCameraPermission();
	}, []);

	// Called when the Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			setScanned(false);
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
					<Button title='Allow Camera' onPress={() => RequestCameraPermission()}/>
				</View> :
				scanned === false ?
				<View style={[StyleSheet.absoluteFillObject, styles.barcodeContainer]}>
					<View style={styles.header}>
						<FontAwesome style={styles.headerLogo} name="qrcode" size={50} color={colors.light}/>
						<Text style={styles.headerText}>Scan QR Code</Text>
					</View>
					<View style={styles.guideContainer}>
						<Image
							style={styles.guide}
							source={require("../assets/guide.png")}
						/>
					</View>
					<BarCodeScanner
						style={StyleSheet.absoluteFillObject}
						onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
						barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
					/>
				</View> :
				<View style={StyleSheet.absoluteFillObject}>
					<View style={styles.header}>
						<FontAwesome style={styles.headerLogo} name="qrcode" size={50} color={colors.light}/>
						<Text style={styles.headerText}>Scan QR Code</Text>
					</View>
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
		backgroundColor: colors.black,
	},
	guideContainer: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 125,
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
	header: {
		position: 'absolute',
		top: 0,
		height: 125,
		width: '100%',
		// borderRadius: 25,
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.light,
		backgroundColor: colors.primary,
		textAlign: 'center',
		textAlignVertical: 'center',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 10,
		zIndex: 1,
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.light,
	},
})

// Export the Component.
export default QRScanScreen;