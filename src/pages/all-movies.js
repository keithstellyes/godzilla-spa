import React from 'react'
import Movies from 'components/Movies'
import movies from 'data/movies.json'

export default () => {
	console.log('all-movies loaded');
	return (<Movies movies={movies}/>);
}