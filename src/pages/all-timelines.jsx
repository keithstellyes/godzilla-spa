import React from 'react'
import { Link } from 'components/Router'
import timelines from 'data/timelines.json'

export default () => {
	return (<>
			{timelines.map((tl, i) => {
				return <Link to={`timeline?id=${tl.id}`} style={{'color':'black'}}>{tl.name}</Link>
			})}
		</>);
} 