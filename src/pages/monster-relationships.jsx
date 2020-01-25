import React from 'react'
import { useRouteData } from 'react-static'
import { getUrlParams } from 'shared/common.jsx'
import { allMonsters, getCoStarMonsters } from 'shared/monsters.jsx'
import { Graphviz } from 'graphviz-react';
import Code from 'components/Code'

export default (props) => {
	const urlParams = getUrlParams();
	// const { timelineid } = useRouteData();
	const monster = urlParams.get('name');
	const src = dotSource(); 
	return (<>
		<Graphviz dot={src} />
		<Code text={src} title="Graphviz Code"/>
	</>);
}

function dotSource() {
	let srcLines = ['graph {'];
	allLinks().forEach(el => srcLines.push('  ' + el));
	srcLines.push('}');
	return srcLines.join('\n');
}

function allLinks() {
	const monsters = Object.keys(allMonsters());
	const links = new Set();
	for(let i = 0; i < monsters.length; i++) {
		const monster = monsters[i];
		const coStars = Object.keys(getCoStarMonsters(monster));
		for(let j = 0; j < coStars.length; j++) {
			const coStar = coStars[j];
			if(monster < coStar) {
				links.add(`"${monster}" -- "${coStar}"`);
			}
		}
	}

	return links;
}