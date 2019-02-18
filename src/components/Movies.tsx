import React from 'react';

import Movie from './Movie';
import Pagination from './Pagination';

function Movies({
    movies,
    addToWatched,
    addToWatchlist,
    isOnWatched,
    isOnWatchlist,
    removeFromWatched,
    removeFromWatchlist,
    totalResults,
}: IMoviesProps) {
    return (
        <>
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
            <Pagination currentPage={1} numberOfPages={10} />
        </>
    );
}

export default Movies;
