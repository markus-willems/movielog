import { dissoc, flatten } from 'ramda';
import * as actionTypes from '../actionTypes';

const initialState: IMoviesState = {
    watched: [],
    watchlist: [],
    byId: {},
};

function processAdd(
    state: IMoviesState,
    { movie }: { movie: IMovie },
    prop: 'watched' | 'watchlist'
) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [movie.id]: movie,
        },
        [prop]: flatten(state[prop].concat(movie.id)),
    };
}

export function processRemove(
    state: IMoviesState,
    { movie }: { movie: IMovie },
    prop: 'watched' | 'watchlist'
) {
    return {
        ...state,
        byId: dissoc(movie.id, state.byId),
        [prop]: state[prop].filter((movieId: string) => movieId !== movie.id),
    };
}

function moviesReducer(state: IMoviesState = initialState, action: IAction) {
    switch (action.type) {
        case actionTypes.ADD_TO_WATCHED:
            return processAdd(
                state,
                action.data as { movie: IMovie },
                'watched'
            );
        case actionTypes.ADD_TO_WATCHLIST:
            return processAdd(
                state,
                action.data as { movie: IMovie },
                'watchlist'
            );
        case actionTypes.REMOVE_FROM_WATCHED:
            return processRemove(
                state,
                action.data as { movie: IMovie },
                'watched'
            );
        case actionTypes.REMOVE_FROM_WATCHLIST:
            return processRemove(
                state,
                action.data as { movie: IMovie },
                'watchlist'
            );
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
