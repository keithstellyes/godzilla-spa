import React from 'react'
import movies from 'data/movies.json'
import Movies from 'components/Movies'

export class Monsters extends React.Component {
	constructor(props) {
		super(props);

		// we can cache these results so do it here :)
		this.state = {content : null, monstersDict: {}};

		for(let i = 0; i < movies.movies.length; i++) {
			let movie = movies.movies[i];
			for(let j = 0; j < movie.monsters.length; j++) {
				let monster = movie.monsters[j];
				if(Object.keys(this.state.monstersDict).indexOf(monster) == -1) {
					this.state.monstersDict[monster] = [];
				}
				this.state.monstersDict[monster].push(movie);
			}
		}

		this.sortByAlphabetical = this.sortByAlphabetical.bind(this);
		this.sortByMostMonsters = this.sortByMostMonsters.bind(this);

		this.sortByAlphabetical();
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
	}

	sortByAlphabetical() {
		this.sortMonsters((a, b) => a < b ? -1 : 1);
	}

	sortByMostMonsters() {
		this.sortMonsters((a, b) => this.state.monstersDict[b].length - this.state.monstersDict[a].length);
	}

	monsterWidget(monster, movies) {
		return (<>
					<h1>{monster}</h1>
					<Movies movies={movies}/>
				</>);
	}
}