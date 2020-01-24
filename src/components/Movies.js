import React from 'react'
import Movie from 'components/Movie'

export default function Movies(props) {
	console.log(props);
	if(props.movies === undefined) {
		return (<b>Movies</b>)
	}
	return (
		<>
			<b>Movies</b>
			{props.movies.map((movie, i) => {
				return (<Movie movie={movie}/>)
			})}
		</>
	);
}