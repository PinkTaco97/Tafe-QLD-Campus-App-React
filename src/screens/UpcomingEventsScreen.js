// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
    ScrollView,
	FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// Import Config Settings.
import colors from '../config/colors';

// Import API Compponents.
import eventsApi from '../api/events';

// Import UI Components.
import Header from '../components/Header';
import EventItem from '../components/EventItem';
import Space from '../components/Space';

// Render the Upcoming Events Screen.
function UpcomingEventsScreen({ navigation }) {

	// The Events loaded from the Database.
	const [events, setEvents] = useState([]);
	
	// Whether there was an error. 
	const [error, setError] = useState(false);

	// Called when Componenet is Rendered.
	// useEffect(() => {
	// 	GetUpcomingEvents();
	// }, [])

	// Called when Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			GetUpcomingEvents();
		}, [])
	);

	// Get the Upcoming Events from the API.
	const GetUpcomingEvents = async () => {
		const response = await eventsApi.getUpcomingEvents();

		// If there was an Error.
		if(!response.ok){
			alert(response.problem);
			console.log(response.problem);
			setError(true);
		}
		else{
			//console.log(response.data);
			setEvents(response.data)
			setError(false);
		}
	}

    return (
        <SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Header title="Upcoming Events"/>
				<FlatList
					style={styles.scrollView}
					data={events}
					keyExtractor={event => event.id.toString()}
					renderItem={({ item }) =>
						<EventItem
							title={item.title}
							description={item.description}
							imageURL={item.image}
							location={item.location}
							startDate={item.eventStart}
							onPress={() => navigation.navigate("EventDetails", item)}
						/>
					}
					ItemSeparatorComponent={() =>
						<Space height={25}/>
					}
					ListFooterComponent={() =>
						<Space height={55}/>
					}
				/>
			</View>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		backgroundColor: colors.primary,
	},
	contentWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
	},
	header: {
		width: "100%",
		height: 75,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		color: colors.white,
		fontSize: 30,
		fontWeight: 'bold',
	},
	scrollView: {
		width: "100%",
		padding: 25,
	},
	event: {
		width: "100%",
		height: 400,
		backgroundColor: colors.primary,
		marginVertical: 25,
	},
})

// Export the Component.
export default UpcomingEventsScreen;