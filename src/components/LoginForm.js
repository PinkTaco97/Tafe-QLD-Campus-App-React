// Import Thrid Party Libraies.
import React, { useContext, useState } from "react";
import {
	Alert,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Import Config Settings.
import colors from "../config/colors";

// Import API Layers.
import authAPI from "../api/auth";

// Import Context.
import AuthContext from "../context/AuthContext";

// Import Storage.
import AuthStorage from "../storage/AuthStorage";

// Import UI Compnents.
import Button from "./Button";
import Link from "./Link";

// Render the Login Form Component.
function LoginForm() {
	// Reference to the Navigator.
	const navigation = useNavigation();

	// Reference to the Users Authentication Data.
	const authContext = useContext(AuthContext);

	// Whether there was an error.
	const [error, setError] = useState(false);

	// The Email Adress of the User.
	const [email, setEmail] = useState("");

	// Whether the Email is Valid.
	const [emailValid, setEmailValid] = useState(true);

	// The Password of the User.
	const [password, setPassword] = useState("");

	// Whether the Password is Valid.
	const [passwordValid, setPasswordValid] = useState(true);

	// Validate the Data in the Login Form.
	function ValidateForm() {
		// Validate the Form Data.
		if (email.length == 0) {
			Alert.alert("Error", "Please enter your email.");
			setEmailValid(false);
			return;
		}
		if (!email.includes("@") || !email.includes(".com")) {
			Alert.alert("Error", "Please enter a valid email.");
			setEmailValid(false);
			return;
		}
		if (password.length == 0) {
			Alert.alert("Error", "Please enter your password.");
			setEmailValid(true);
			setPasswordValid(false);
			return;
		}
		if (password.length < 6) {
			Alert.alert("Error", "Password must be atleast 6 characters long.");
			setEmailValid(true);
			setPasswordValid(false);
			return;
		}

		const user = {
			email: email,
			password: password,
		};

		Login(user);

		// TODO: Hash User Password.
		// TODO: Send Email & Password to Server.
		//Alert.alert("Welcome");
		setEmail("");
		setEmailValid(true);
		setPassword("");
		setPasswordValid(true);
	}

	// Validate the Data in the Login Form.
	async function Login(user) {
		// Get Respones from API.
		const response = await authAPI.login(user);

		// If there was an Error.
		if (!response.ok) {
			// Update the Error state.
			setError(true);

			if (response.status == 423) {
				Alert.alert("Error", "Your accaount has been locked.");
			} else {
				Alert.alert("Error", "Invalid Username or Password.");
			}

			// Print the Error to the console.
			console.log(response.originalError);
		} else {
			// Update the Error state.
			setError(false);

			// Print the Error to the console.
			console.log(response.data);

			// Store the Users Profile in Local Storage.
			AuthStorage.storeAuth(response.data);

			// Updated the Profile Context.
			authContext.setAuth(response.data);

			// Redirect the User to the More Screen.
			navigation.navigate("More");
		}
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>Welcome</Text>
				<Text style={styles.description}>
					Please login with your credentials.
				</Text>
				<View
					style={[
						styles.input,
						emailValid ? styles.inputValid : styles.inputInvalid,
					]}
				>
					<FontAwesome
						name="at"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Email Address"
						placeholderTextColor={colors.dark}
						value={email}
						onChangeText={(text) => setEmail(text)}
						autoCapitalize="none"
					/>
				</View>
				<View
					style={[
						styles.input,
						passwordValid ? styles.inputValid : styles.inputInvalid,
					]}
				>
					<FontAwesome
						name="lock"
						style={styles.icon}
						size={20}
						color={colors.dark}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						placeholderTextColor={colors.dark}
						value={password}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize="none"
						secureTextEntry
					/>
				</View>
				<Link
					title="Forgot Password?"
					style={styles.forgotPasswordLink}
					onPress={() => navigation.navigate("ForgotPassword")}
				/>
				<Button title="Login" onPress={() => ValidateForm()} />
				<Text style={styles.label}>Don't have an account?</Text>
				<Link
					title="Register"
					style={styles.registerLink}
					onPress={() => navigation.navigate("Register")}
				/>
			</View>
		</KeyboardAvoidingView>
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
		//borderBottomColor: colors.light,
		borderBottomWidth: 2,
	},
	inputValid: {
		borderBottomColor: colors.light,
	},
	inputInvalid: {
		borderBottomColor: colors.primary,
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
		marginHorizontal: 15,
	},
	registerLink: {
		alignSelf: "center",
	},
});

// Export the Component.
export default LoginForm;
