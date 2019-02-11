function titleSearchMapper({ Search }: IOMDbSearchResponse): Movie[] {
    console.log('Search', Search);
    return Search
        ? Search.map((movie: IOMDbSearchTitle) => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster === 'N/A' ? null : movie.Poster,
          }))
        : [];
}

export { titleSearchMapper };
