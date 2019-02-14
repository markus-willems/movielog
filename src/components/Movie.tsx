import React from 'react';

function Movie({
    movie,
    addToWatched,
    addToWatchlist,
    isOnWatched,
    isOnWatchlist,
    removeFromWatched,
    removeFromWatchlist,
}: IMovieProps) {
    const { title, id, poster, year } = movie;
    const movieIsOnWatched = isOnWatched(id);
    const movieIsOnWatchlist = isOnWatchlist(id);
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
                    onClick={() =>
                        movieIsOnWatched
                            ? removeFromWatched(movie)
                            : addToWatched(movie)
                    }
                    className="btn btn--primary">
                    {movieIsOnWatched ? 'Remove from' : 'Add to'} {'Watched'}
                </button>
                <button
                    onClick={() =>
                        movieIsOnWatchlist
                            ? removeFromWatchlist(movie)
                            : addToWatchlist(movie)
                    }
                    className="btn btn--primary">
                    {movieIsOnWatchlist ? 'Remove from' : 'Add to'}{' '}
                    {'Watchlist'}
                </button>
            </div>
        </div>
    );
}

export default Movie;
