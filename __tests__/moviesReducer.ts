import * as actionTypes from '../src/actionTypes';
import moviesReducer from '../src/reducers/movies';

const movie: IMovie = {
    id: '1234',
    title: 'Hello there',
    poster: null,
    year: '2019',
};

describe('moviesReducer', () => {
    it('should return the initialState', () => {
        const expectedState = {
            byId: {},
            watched: [],
            watchlist: [],
        };
        const actualState = moviesReducer(undefined, {
            type: '@DOESNT_EXIST@',
        });
        expect(actualState).toEqual(expectedState);
    });
    it('should add movie to `byId` and watched', () => {
        const addToWatchedAction = {
            type: 'ADD_TO_WATCHED',
            data: {
                movie,
            },
        };
        const expectedState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [movie.id],
            watchlist: [],
        };
        const actualState = moviesReducer(undefined, addToWatchedAction);
        expect(actualState).toEqual(expectedState);
    });
    it('should add movie to `byId` and watchlist', () => {
        const addToWatchlistAction = {
            type: 'ADD_TO_WATCHLIST',
            data: {
                movie,
            },
        };
        const expectedState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [],
            watchlist: [movie.id],
        };
        const actualState = moviesReducer(undefined, addToWatchlistAction);
        expect(actualState).toEqual(expectedState);
    });
    it('should remove movie id from watched', () => {
        const removeFromWatchedAction = {
            type: 'REMOVE_FROM_WATCHED',
            data: {
                movie,
            },
        };
        const currentState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [movie.id],
            watchlist: [movie.id],
        };
        const expectedState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [],
            watchlist: [movie.id],
        };
        const actualState = moviesReducer(
            currentState,
            removeFromWatchedAction
        );
        expect(actualState).toEqual(expectedState);
    });
    it('should remove movie id from watchlist', () => {
        const removeFromWatchlistAction = {
            type: 'REMOVE_FROM_WATCHLIST',
            data: {
                movie,
            },
        };
        const currentState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [movie.id],
            watchlist: [movie.id],
        };
        const expectedState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [movie.id],
            watchlist: [],
        };
        const actualState = moviesReducer(
            currentState,
            removeFromWatchlistAction
        );
        expect(actualState).toEqual(expectedState);
    });
    it('should remove movie id from watchlist and movie from `byId` when watchlist was the only list referencing that movie', () => {
        const removeFromWatchlistAction = {
            type: 'REMOVE_FROM_WATCHLIST',
            data: {
                movie,
            },
        };
        const currentState = {
            byId: {
                [movie.id]: movie,
            },
            watched: [],
            watchlist: [movie.id],
        };
        const expectedState = {
            byId: {},
            watched: [],
            watchlist: [],
        };
        const actualState = moviesReducer(
            currentState,
            removeFromWatchlistAction
        );
        expect(actualState).toEqual(expectedState);
    });
});
