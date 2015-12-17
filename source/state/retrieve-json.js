const RETRIEVE_JSON = 'RETRIEVE_JSON'

//* @param location=string URL for json
export function retrieveJson(location) {
	return fetch(location)
		.then(response => response.json())
}

// Gets classroom data from Hawken Rives' JSON, currently just grabs data from a specified JSON
export default function getData() {
	return {
		type: RETRIEVE_JSON,
		payload: retrieveJson('https://www.stolaf.edu/people/rives/courses/terms/20151.json').then(data => ({
			data,
			term: 20151,
		})),
	}
}

 