import React from 'react'
import Movie from 'components/Movie'

export default function Movies(props) {
	return (
		<div>
			<b>Movies</b>
			{props.movies.movies.map((movie, i) => {
				return (<Movie movie={movie}/>)
			})}
		</div>
	);
}