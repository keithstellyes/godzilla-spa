import React from 'react'
import movies from 'data/movies.json'
import Movies from 'components/Movies'
import {allMonsters} from 'shared/monsters.jsx'

export class Monsters extends React.Component {
	constructor(props) {
		super(props);

		// we can cache these results so do it here :)
		this.state = {content : null, monstersDict: allMonsters()};

		this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
		this.sortByMostMonsters = this.sortByMostMonsters.bind(this);

		// normally assigning directly is unnecessary, but the setState() was getting batched so we force it here
		this.state.content = this.sortByMostMonsters();
	}

 	render() {
		return (<>
				<button onClick={this.sortByAlphabetical}>Sort Alphabetically</button>
				<button onClick={this.sortByMostMonsters}>Sort By Most Monsters</button>
				{this.state.content}
			</>);
	}

	sortMonsters(comparator) {
		let monsters = Object.keys(this.state.monstersDict);
		monsters.sort(comparator);
		let newContent = (<>{monsters.map((monster, i) => this.monsterWidget(monster, this.state.monstersDict[monster]))}</>);
		this.setState({content : newContent});
		return newContent;
	}

	sortByAlphabetical() {
		return this.sortMonsters((a, b) => a < b ? -1 : 1);
	}

	sortByMostMonsters() {
		return this.sortMonsters((a, b) => this.state.monstersDict[b].length - this.state.monstersDict[a].length);
	}

	monsterWidget(monster, movies) {
		return (<>
					<h1>{monster}</h1>
					<Movies movies={movies}/>
				</>);
	}
}