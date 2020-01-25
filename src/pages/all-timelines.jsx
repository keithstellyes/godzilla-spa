import React from 'react'
import { Link } from 'components/Router'
import timelines from 'data/timelines.json'
import {getCoStarMonsters} from '../shared/monsters'

export default () => {
	return (<>
			<pre>{JSON.stringify(getCoStarMonsters('Mothra'))}</pre>
			{timelines.map((tl, i) => {
				return <Link to={`timeline?id=${tl.id}`} style={{'color':'black'}}>{tl.name}</Link>
			})}
		</>);
}