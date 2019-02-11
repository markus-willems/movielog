import React from 'react';

function Movies({ movies, addToWatched, addToWatchlist }: IMoviesProps) {
    return (
        <div className="movies">
            {movies.map((movie: Movie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    addToWatched={addToWatched}
                    addToWatchlist={addToWatchlist}
                />
            ))}
        </div>
    );
}

function Movie({ movie, addToWatched, addToWatchlist }: IMovieProps) {
    const { title, id, poster, year } = movie;
    return (
        <div className="movies__movie">
            <div className="movies__shortinfo" />
            <h2>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://imdb.com/title/${id}`}>
                    {title} ({year})
                </a>
            </h2>
            <img
                className="movies__movie__poster"
                src={poster ? poster : 'default_image'}
                alt={`Poster for ${title}`}
            />
            <div className="movies_actions">
                <button
                    onClick={() => addToWatched(movie)}
                    className="btn btn--watched">
                    Watched
                </button>
                <button
                    onClick={() => addToWatchlist(movie)}
                    className="btn btn--watchlist">
                    Watchlist
                </button>
            </div>
        </div>
    );
}

export default Movies;
