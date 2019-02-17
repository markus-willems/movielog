function titleSearchMapper({
    Search,
    totalResults,
}: IOMDbSearchResponse): {
    movies: IMovie[];
    totalResults: string;
} {
    const movies = Search
        ? Search.map((movie: IOMDbSearchTitle) => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster === 'N/A' ? null : movie.Poster,
          }))
        : [];
    return {
        movies,
        totalResults,
    };
}

export { titleSearchMapper };
