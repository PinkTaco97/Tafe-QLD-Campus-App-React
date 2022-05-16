// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';

// Import UI Compponents.
import EventDetails from '../components/EventDetails';

// Render Event Details Screen.
function EventDetailsScreen({ navigation, route }) {

	// The Event Data passed from the Previous Screen.
	const event = route.params;

	// Called when Componenet is Rendered.
	useEffect(() => {
		navigation.setOptions({
			headerTitle: event.title
		})
	}, [])

    return (
        <EventDetails
			title={event.title}
			content={event.content}
			imageURL={event.image}
			location={event.location}
			startDate={event.event_start}
		/>
    );
}

// Export the Component.
export default EventDetailsScreen;