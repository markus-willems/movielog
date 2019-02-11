import * as actionTypes from '../actionTypes';

const initialState: IMoviesState = {
    watched: [],
    watchlist: [],
    byId: {},
};

interface IMoviesState {
    watched: string[];
    watchlist: string[];
    byId: {
        [movieId: string]: Movie;
    };
}

function processAddToWatched(state: IMoviesState, { movie }: { movie: Movie }) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [movie.id]: movie,
        },
        watched: [...new Set(state.watched.concat(movie.id))],
    };
}

function processAddToWatchlist(
    state: IMoviesState,
    { movie }: { movie: Movie }
) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [movie.id]: movie,
        },
        watchlist: [...new Set(state.watchlist.concat(movie.id))],
    };
}

function moviesReducer(
    state: IMoviesState = initialState,
    action: { type: string; data?: any }
) {
    switch (action.type) {
        case actionTypes.ADD_TO_WATCHED:
            return processAddToWatched(state, action.data);
        case actionTypes.ADD_TO_WATCHLIST:
            return processAddToWatchlist(state, action.data);
        default:
            return state;
    }
}

function extendById(prevState: IMoviesState, movies: IOMDbSearchTitle[]) {
    const moviesById = movies.reduce((acc: any, movie: IOMDbSearchTitle) => {
        acc[movie.imdbID] = movie;
        return acc;
    }, {});
    const nextById = { ...prevState.byId, ...moviesById };
    return { ...prevState, byId: nextById };
}

export function selectWatchedMovies({ byId, watched }: IMoviesState) {
    return Object.keys(byId)
        .filter((movieId: string) => watched.includes(movieId))
        .map((movieId: string) => byId[movieId]);
}

export function selectWatchlistMovies({ byId, watchlist }: IMoviesState) {
    return Object.keys(byId)
        .filter((movieId: string) => watchlist.includes(movieId))
        .map((movieId: string) => byId[movieId]);
}

export function selectAllMovies({ byId }: IMoviesState) {
    return Object.keys(byId).map((movieId: string) => byId[movieId]);
}

export default moviesReducer;
