// Import Thrid Party Libraies.
import React from 'react';

// Import UI Compponents.
import EventDetails from '../components/EventDetails';

// Render Event Details Screen.
function EventDetailsScreen({ route }) {

	// The Event Data passed from the Previous Screen.
	const event = route.params;

    return (
        <EventDetails
			title={event.title}
			description={event.description}
			imageURL={event.image}
			location={event.location}
			startDate={event.event_start}
		/>
    );
}

// Export the Component.
export default EventDetailsScreen;