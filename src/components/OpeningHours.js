// Import Thrid Party Libraies.
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Import Config Settings.
import colors from "../config/colors";

// Render the Opening Hours Component.
function OpeningHours({ hours }) {
	function formatHours(hours) {
		if (hours <= 12) return "" + hours + "am";
		return "" + hours - 12 + "pm";
	}

	const newHours = [];

	// Monday
	if (hours.monOpen == "00:00:00") {
		newHours.push({ title: "Monday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.monOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.monClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Monday", time: time });
	}

	// Tuesday
	if (hours.tueOpen == "00:00:00") {
		newHours.push({ title: "Tuesday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.tueOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.tueClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Tuesday", time: time });
	}

	// Wednesday
	if (hours.wedOpen == "00:00:00") {
		newHours.push({ title: "Wednesday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.wedOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.wedClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Wednesday", time: time });
	}

	// Thursday
	if (hours.thurOpen == "00:00:00") {
		newHours.push({ title: "Thursday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.thurOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.thurClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Thursday", time: time });
	}

	// Friday
	if (hours.friOpen == "00:00:00") {
		newHours.push({ title: "Friday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.friOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.friClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Friday", time: time });
	}

	// Saturday
	if (hours.satOpen == "00:00:00") {
		newHours.push({ title: "Saturday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.satOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.satClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Saturday", time: time });
	}

	// Sunday
	if (hours.sunOpen == "00:00:00") {
		newHours.push({ title: "Sunday", time: "Closed" });
	} else {
		let open = new Date("19 Sep 1997 " + hours.sunOpen + "UTC+10:00");
		let close = new Date("19 Sep 1997 " + hours.sunClose + "UTC+10:00");
		let time =
			formatHours(open.getHours()) +
			" - " +
			formatHours(close.getHours());
		newHours.push({ title: "Sunday", time: time });
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Opening Hours</Text>
			{newHours.map((hour) => (
				<View key={hour.title} style={styles.row}>
					<Text style={styles.day}>{hour.title}</Text>
					<Text style={styles.time}>{hour.time}</Text>
				</View>
			))}
		</View>
	);
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.light,
		overflow: "hidden",
	},
	title: {
		width: "100%",
		fontSize: 25,
		fontWeight: "bold",
		color: colors.dark,
		backgroundColor: colors.white,
		textAlign: "center",
		padding: 10,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		fontSize: 15,
		fontWeight: "bold",
		color: colors.dark,
	},
	day: {
		flex: 0.5,
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "right",
		color: colors.dark,
		padding: 10,
	},
	time: {
		flex: 0.5,
		fontSize: 15,
		color: colors.dark,
		padding: 10,
	},
	scrollView: {
		backgroundColor: colors.white,
	},
	description: {
		fontSize: 15,
		color: colors.dark,
		backgroundColor: colors.white,
		padding: 15,
		textAlign: "center",
	},
});

// Export the Component.
export default OpeningHours;
