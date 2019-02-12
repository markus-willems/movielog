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

export function processRemoveFromWatched(
    state: IMoviesState,
    { movie }: { movie: Movie }
) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [movie.id]: movie,
        },
        watched: state.watched.filter(
            (movieId: string) => movieId !== movie.id
        ),
    };
}

export function processRemoveFromWatchlist(
    state: IMoviesState,
    { movie }: { movie: Movie }
) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [movie.id]: movie,
        },
        watchlist: state.watchlist.filter(
            (movieId: string) => movieId !== movie.id
        ),
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
        case actionTypes.REMOVE_FROM_WATCHED:
            return processRemoveFromWatched(state, action.data);
        case actionTypes.REMOVE_FROM_WATCHLIST:
            return processRemoveFromWatchlist(state, action.data);
        default:
            return state;
    }
}

export function selectWatchedMovies({ byId, watched }: IMoviesState) {
    return Object.keys(byId)
        .filter((movieId: string) => watched.includes(movieId))
        .map((movieId: string) => byId[movieId]);
}

export function isOnWatched({ watched }: IMoviesState, movieId: string) {
    return watched.includes(movieId);
}

export function selectWatchlistMovies({ byId, watchlist }: IMoviesState) {
    return Object.keys(byId)
        .filter((movieId: string) => watchlist.includes(movieId))
        .map((movieId: string) => byId[movieId]);
}

export function isOnWatchlist({ watchlist }: IMoviesState, movieId: string) {
    return watchlist.includes(movieId);
}

export function selectAllMovies({ byId }: IMoviesState) {
    return Object.keys(byId).map((movieId: string) => byId[movieId]);
}

export default moviesReducer;
