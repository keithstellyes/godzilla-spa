import React from 'react'
import Movies from 'components/Movies'
import movies from 'data/movies.json'

export default () => {
	return (<Movies movies={movies}/>);
}