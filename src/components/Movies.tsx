import React from 'react';

function Movies({ movies }: any) {
    return (
        <div>
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
        <div>
            <a href={`http://imdb.com/title/${imdbID}`}>{title}</a>
            <img
                className="movie-poster"
                src={poster}
                alt={`Poster for ${title}`}
            />
        </div>
    );
}

export default Movies;
