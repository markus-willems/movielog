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
        [movieId: string]: IOMDbSearchTitle;
    };
}

function moviesReducer(
    state: IMoviesState = initialState,
    action: { type: string; data?: any }
) {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_TITLE_SUCCESS:
            return extendById(state, action.data);
        case actionTypes.FETCH_SEARCH_TITLE_ERROR:
            return state;
    }
    return state;
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
