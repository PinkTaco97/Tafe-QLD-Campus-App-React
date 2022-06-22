// Import Thrid Party Libraies.
import React, { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Crypto from "expo-crypto";

// Import Config Settings.
import colors from "../config/colors";
import settings from "../config/settings";

// Import API Layers.
import authAPI from "../api/auth";

// Import UI Compnents.
import Button from "./Button";
import Link from "./Link";

// Render the Register Form Component.
function RegisterForm() {
	// Whether the Email is Valid.
	const [error, setError] = useState(false);

	// Reference to the Navigator.
	const navigation = useNavigation();

	// The Name of the User.
	const [name, setName] = useState("");

	// The Email Adress of the User.
	const [email, setEmail] = useState("");

	// The Password of the User.
	const [password, setPassword] = useState("");

	// The Confirm Password of the User.
	const [confirmPassword, setConfirmPassword] = useState("");

	// Validate the Data in the Login Form.
	async function ValidateForm() {
		// Validate the Form Data.
		if (name.length == 0) {
			Alert.alert("Error", "Please enter your name.");
			return;
		}
		if (email.length == 0) {
			Alert.alert("Error", "Please enter your email.");
			return;
		}
		if (!email.includes("@") || !email.includes(".com")) {
			Alert.alert("Error", "Please enter a valid email.");
			return;
		}
		if (password.length == 0) {
			Alert.alert("Error", "Please enter your password.");
			return;
		}
		if (password.length < 6) {
			Alert.alert("Error", "Password must be atleast 6 characters long.");
			return;
		}
		if (confirmPassword.length == 0) {
			Alert.alert("Error", "Please confirm your password.");
			return;
		}
		if (password !== confirmPassword) {
			Alert.alert("Error", "Passwords don't match!");
			return;
		}

		// Hash the User's Password.
		const hashedPassword = await Crypto.digestStringAsync(
			Crypto.CryptoDigestAlgorithm.SHA256,
			password
		);

		// Create the User Object.
		const user = {
			email: email,
			username: email,
			password: hashedPassword,
		};

		// Register the User
		registerUser(user);
	}

	// Validate the Data in the Login Form.
	async function registerUser(user) {
		// Get Respones from API.
		const response = await authAPI.register(user);

		// If there was an Error.
		if (!response.ok) {
			// Update the Error state.
			setError(true);

			// Alert the User that there was an Error.
			Alert.alert(
				"Error",
				"There was an error creating your account, please try again later."
			);

			// Print the Error to the console.
			if (settings.isDebug) console.log(response.originalError);
		} else {
			// Update the Error state.
			setError(false);

			// Alert the User that their account was created.
			Alert.alert("Success", "Account Created.");

			// Redirect the User to the previous screen.
			navigation.goBack();
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>Register</Text>
				<Text style={styles.description}>
					This account is seperate from your Tafe QLD identity.
				</Text>
				<View style={styles.input}>
					<FontAwesome
						name="user"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Name"
						value={name}
						onChangeText={(text) => setName(text)}
						autoCapitalize="none"
					/>
				</View>
				<View style={styles.input}>
					<FontAwesome
						name="at"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Email Address"
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
					/>
				</View>
				<View style={styles.input}>
					<FontAwesome
						name="lock"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry
					/>
				</View>
				<View style={styles.input}>
					<FontAwesome
						name="lock"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Confirm Password"
						value={confirmPassword}
						onChangeText={(text) => setConfirmPassword(text)}
						autoCapitalize="none"
						secureTextEntry
					/>
				</View>
				<Button title="Register" onPress={() => ValidateForm()} />
				<Text style={styles.label}>Already have an account?</Text>
				<Link
					title="Login"
					style={styles.registerLink}
					onPress={() => navigation.navigate("Login")}
				/>
			</View>
		</View>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		padding: 15,
	},
	form: {
		width: "100%",
		backgroundColor: colors.white,
		borderRadius: 25,
		padding: 5,
		justifyContent: "center",
	},
	title: {
		color: colors.dark,
		fontSize: 35,
		fontWeight: "bold",
		paddingLeft: 15,
		paddingTop: 15,
	},
	description: {
		color: colors.dark,
		fontSize: 14,
		padding: 15,
	},
	input: {
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 15,
		marginVertical: 10,
		borderBottomColor: colors.light,
		borderBottomWidth: 2,
	},
	icon: {
		alignSelf: "center",
		padding: 5,
		width: 30,
	},
	textInput: {
		flex: 1,
		color: colors.dark,
		padding: 10,

		// ALT Style:
		// backgroundColor: colors.light,
		// marginHorizontal: 15,
		// marginVertical:10,
		// borderRadius: 10,
	},
	label: {
		color: colors.dark,
		fontSize: 15,
		alignSelf: "center",
	},
	forgotPasswordLink: {
		alignSelf: "flex-end",
	},
	registerLink: {
		alignSelf: "center",
	},
});

// Export the Component.
export default RegisterForm;
