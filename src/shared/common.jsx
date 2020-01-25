export function getUrlParams() {
	let queryString = '';
	if(typeof window !== 'undefined') {
		// so react-static compiler doesn't choke
		queryString = window.location.search;
	}
	return new URLSearchParams(queryString);
}