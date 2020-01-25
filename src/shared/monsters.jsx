import movies from '../data/movies.json'

export function getCoStarMonsters(monster) {
	const coStars = {};
	for(let i = 0; i < movies.movies.length; i++) {
		const movie = movies.movies[i];
		if(movie.monsters.indexOf(monster) !== -1) {
			for(let j = 0; j < movie.monsters.length; j++) {
				const coStar = movie.monsters[j];
				if(movie.monsters[j] !== monster) {
					const coStar = movie.monsters[j];
					if(!(coStar in coStars)) {
						coStars[coStar] = [];
					}
					coStars[coStar].push(movie);
				}
			}
		}
	}

	return coStars;
}

export function allMonsters() {
	const monstersDict = {};
	for(let i = 0; i < movies.movies.length; i++) {
		let movie = movies.movies[i];
		for(let j = 0; j < movie.monsters.length; j++) {
			let monster = movie.monsters[j];
			if(!(monster in monstersDict)) {
				monstersDict[monster] = [];
			}
			monstersDict[monster].push(movie);
		}
	}

	return monstersDict;
}