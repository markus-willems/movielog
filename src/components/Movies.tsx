import React from 'react';

import Movie from './Movie';

function Movies({
    movies,
    addToWatched,
    addToWatchlist,
    isOnWatched,
    isOnWatchlist,
    removeFromWatched,
    removeFromWatchlist,
}: IMoviesProps) {
    return (
        <div className="movies">
            {movies.map((movie: IMovie) => (
                <Movie
                    key={movie.id}
                    movie={movie}
                    addToWatched={addToWatched}
                    addToWatchlist={addToWatchlist}
                    isOnWatched={isOnWatched}
                    isOnWatchlist={isOnWatchlist}
                    removeFromWatched={removeFromWatched}
                    removeFromWatchlist={removeFromWatchlist}
                />
            ))}
        </div>
    );
}

export default Movies;
