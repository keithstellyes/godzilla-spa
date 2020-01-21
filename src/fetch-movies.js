export default function fetchMovies(path="data/movies.toml") {
	console.log('fetchMovies() called');
	let req = new XMLHttpRequest();
	req.open('GET', path);
	req.send(null);

	return req.responseText;
}
