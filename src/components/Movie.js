import React from 'react'

export default function Movie(props) {
	return (
		<div>
			<p>{props.movie.name} <b>{props.movie.year}</b></p>
		</div>
	);
}