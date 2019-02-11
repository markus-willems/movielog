const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

function searchByTitle(title: string): Promise<IOMDbSearchResponse> {
    return fetch(apiUrl + '&s=' + title).then((response) => response.json());
    /* return fetch('https://api.myjson.com/bins/13j47s').then((response) =>
        response.json()
    ); */
}

export { searchByTitle };
