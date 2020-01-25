import React from 'react'

export default function Movie(props) {
	let monstersEntry = '';
	if(Array.isArray(props.movie.monsters)) {
		monstersEntry = props.movie.monsters.join(', ');
	}
	return (
		<table>
			<tr>
				<th>Title</th>
				<th>Year released</th>
				<th>Monsters</th>
			</tr>
			<tr>
				<td>{props.movie.title}</td>
				<td>{props.movie.year}</td>
				<td>{monstersEntry}</td>
			</tr>
		</table>
	);
}