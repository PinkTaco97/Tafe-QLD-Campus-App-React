// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	Button,
} from 'react-native';

// Import Custom Compponents.
import colors from '../config/colors';
import pointsApi from '../api/points';
import POIInformation from '../components/POIInfomation';

// Render the Point of Intrest Screen.
function POIScreen({ navigation, route }) {

	// The Data passed from the QR Scan Screen.
	const data = route.params;

	// The Point loaed from the Database.
	const [point, setPoint] = useState();
	
	// Whether a Point was found from the Data. 
	const [found, setFound] = useState(false);

	// Called when Componenet is Rendered.
	useEffect(() => {
		setFound(false);
		LoadPoint(data);
	}, [data])

	const LoadPoint = async (id) => {
		const response = await pointsApi.getPoint(id);
		//setPoint(response.data);
		if(!response.ok){
			alert("QR Code Not Found.");
			setFound(false);
			//console.log(response.problem);
			navigation.navigate("Scan");
		}
		else{
			//alert(response.data.discription);
			//console.log(response.data);
			setPoint(response.data)
			setFound(true);
		}
	}

	if(found === true){
		return(
			<POIInformation
				title={point.title}
				description={point.discription}
				onPress={() => navigation.navigate("Scan")}
			/>
		)
	}

    return (
        <ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<Text style={styles.heading}>{data}</Text>
			<Button title="Scan Again" onPress={() => navigation.navigate("Scan")}/>
		</ImageBackground>
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
export default POIScreen;