import React from 'react'
import Movie from 'components/Movie'

import './movies.scss'

export default function Movies(props) {
	if(props.movies === undefined) {
		return (<b>Movies</b>)
	}
	return (
		<table className="Movies">
			<thead>
				<tr className="Movies">
					<th>Title</th>
					<th>Year released</th>
					<th>Monsters</th>
				</tr>
			</thead>
			<tbody>
				{props.movies.map((movie, i) => {
					return (
						<tr className="movies">
							<td>{movie.name}</td>
							<td>{movie.year}</td>
							<td>{getMovieMonsters(movie)}</td>
						</tr>
						);
				})}
			</tbody>
		</table>
	);
}

function getMovieMonsters(movie) {
	let monsters = '';
	if(Array.isArray(movie.monsters)) {
		monsters = movie.monsters.join(', ');
	}

	return monsters;
}