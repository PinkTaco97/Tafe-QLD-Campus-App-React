// Import Thrid Party Libraies.
import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import Config Settings.
import colors from '../config/colors';

// Render the Header Component.
function Header({ title, back=false, onBack}) {
    return ( 
		<View style={styles.container}>
			{
				back ?
					<TouchableOpacity style={styles.backButton} onPress={onBack}>
						<FontAwesome name="arrow-left" size={30} color={colors.white}/>
					</TouchableOpacity>
				:
					<></>
			}
			<Text style={styles.title}>{title}</Text>
		</View>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 75,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: colors.white,
		fontSize: 30,
		fontWeight: 'bold',
	},
	backButton: {
		position: 'absolute',
		top: 12.5,
		left: 12.5,
		height: 50,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

// Export the Component.
export default Header;