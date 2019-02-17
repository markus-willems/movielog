const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

function searchByTitle(
    title: string,
    page: number
): Promise<IOMDbSearchResponse> {
    return fetch(apiUrl + '&s=' + title + '&page=' + page).then((response) =>
        response.json()
    );
}

export { searchByTitle };
