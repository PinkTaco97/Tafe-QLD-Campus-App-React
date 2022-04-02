// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';

// Import UI Compponents.
import POIDetails from '../components/POIDetails';

// Import API Compponents.
import pointsApi from '../api/points';

// Render the Point of Intrest Screen.
function POIScreen({ navigation, route }) {

	// The Data passed from the QR Scan Screen.
	const data = route.params;

	// The Point loaded from the Database.
	const [point, setPoint] = useState();
	
	// Whether a Point was found from the Data. 
	const [found, setFound] = useState(false);

	// Called when Componenet is Rendered.
	useEffect(() => {
		setFound(false);
		GetPoint(data);
	}, [data])

	// Get the Point Data from the API.
	const GetPoint = async (code) => {

		// The Response from the API.
		const response = await pointsApi.getPoint(code);

		// If there was an Error.
		if(!response.ok){
			alert("QR Code Not Found.");
			setFound(false);
		}
		else{
			setPoint(response.data)
			setFound(true);
		}
	}

	// If 
	if(found === true){
		return(
			<POIDetails
				title={point.title}
				description={point.description}
				imageURL={point.image}
				onPress={() => navigation.navigate("Scan")}
			/>
		)
	}

    return (
        <></>
    );
}

// Export the Component.
export default POIScreen;