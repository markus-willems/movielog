import React from 'react';

function Movies({ movies }: any) {
    return (
        <div className="movies">
            {movies.map((movie: any) => (
                <Movie
                    key={movie.imdbID}
                    imdbID={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                />
            ))}
        </div>
    );
}

function Movie({ title, imdbID, poster }: any) {
    return (
        <div className="movies__movie">
            <div className="movies__shortinfo" />
            <h2>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://imdb.com/title/${imdbID}`}>
                    {title}
                </a>
            </h2>
            <img
                className="movies__movie__poster"
                src={poster}
                alt={`Poster for ${title}`}
            />
            <div className="movies_actions">
                <button className="btn btn--watched">Watched</button>
                <button className="btn btn--watchlist">Watchlist</button>
            </div>
        </div>
    );
}

export default Movies;
