// Import Third Party Libraries.
import { create } from "apisauce";

// Create an API Layer.
//baseURL: 'http://139.218.85.171:8000/'
//baseURL: 'http://127.0.0.1:8000/'
//baseURL: 'http://robina.elankayer.net:8081'
const client = create({
	baseURL: "http://139.218.85.171:8000/",
});

// Export the API Layer.
export default client;
