// Import Third Party Libraries.
import { create } from 'apisauce';

// Create an API Layer.
const client = create({
	baseURL: 'http://139.218.85.171:8000/'
})

// Export the API Layer.
export default client;