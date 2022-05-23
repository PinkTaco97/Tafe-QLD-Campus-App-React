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

// Import UI Components.
import Link from './Link';

// Render the Header Component.
function Header({
	title,
	color = 'primary',
	style,
	leftLink=false,
	leftLinkText,
	onLeftLink,
	rightLink=false,
	rightLinkText,
	rightLinkColor,
	onRightLink,
	back=false,
	onBack,
	
	}) {
    return ( 
		<View style={[styles.container, style, {color: colors[color]}]}>
			{
				back ?
					<TouchableOpacity style={styles.backButton} onPress={onBack}>
						<FontAwesome name="arrow-left" size={30} color={colors.white}/>
					</TouchableOpacity>
				:
					<></>
			}
			{
				rightLink ?
				<Link
					title={rightLinkText}
					style={styles.rightLink}
					onPress={onRightLink}
					color={rightLinkColor}
				/>
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
		zIndex: 9,
	},
	title: {
		color: colors.white,
		// backgroundColor: colors.light,
		fontSize: 30,
		fontWeight: 'bold',
		height: 75,
		lineHeight: 75,
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
	rightLink: {
		height: 75,
		width: 75,
		position: 'absolute',
		right: 0,
		// backgroundColor: colors.light,
		//alignSelf: 'flex-end',
	},
})

// Export the Component.
export default Header;