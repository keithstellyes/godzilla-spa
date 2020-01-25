import React from 'react'
import { useRouteData } from 'react-static'
import movieDataset from 'data/movies.json'
import timelines from 'data/timelines.json'
import Movies from 'components/Movies'

export default (props) => {
	const urlParams = new URLSearchParams(window.location.search);
	// const { timelineid } = useRouteData();
	const timelineId = urlParams.get('id');
	let timeline = null;
	for(let i = 0; i < timelines.length; i++) {
		if(timelines[i].id == timelineId) {
			timeline = timelines[i];
			break;
		}
	}

	if(timeline == null) {
		return (<strong>Could not find timeline ID: {timelineId}</strong>);
	}

	let movies = [];
	for(let i = 0; i < timeline.movies.length; i++) {
		for(let j = 0; j < movieDataset.movies.length; j++) {
			console.log(timeline.movies[i].id, movieDataset.movies[j].id);
			if(timeline.movies[i] == movieDataset.movies[j].id) {
				movies.push(movieDataset.movies[j]);
				break;
			}
		}
	}

	return (<Movies movies={movies}/>);
}