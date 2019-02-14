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
    const removeMetaData =
        ([] as string[])
            .concat(state.watched, state.watchlist)
            .filter((id: string) => id === movie.id).length === 1;
    return {
        ...state,
        byId: removeMetaData ? dissoc(movie.id, state.byId) : state.byId,
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

export function selectAllMovies({ byId }: IMoviesState) {
    return Object.keys(byId).map((movieId: string) => byId[movieId]);
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

export function isOnList(
    state: IMoviesState,
    movieId: string,
    list: 'watched' | 'watchlist'
) {
    return state[list].includes(movieId);
}

export default moviesReducer;
