import React from 'react'
import { useRouteData } from 'react-static'
import movieDataset from 'data/movies.json'
import timelines from 'data/timelines.json'
import Movies from 'components/Movies'
import { getUrlParams } from 'shared/common.jsx'

export default (props) => {
	const urlParams = getUrlParams();
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
			if(timeline.movies[i] == movieDataset.movies[j].id) {
				movies.push(movieDataset.movies[j]);
				break;
			}
		}
	}

	return (<Movies movies={movies}/>);
}