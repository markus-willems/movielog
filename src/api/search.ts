const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

function searchTitle(title: string): Promise<IOMDbSearchResponse> {
	return fetch(apiUrl + '&s=' + title).then((response) => response.json());
}

export { searchTitle };
