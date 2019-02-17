import {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
} from '../src/actions';
import * as actionTypes from '../src/actionTypes';

const movie: IMovie = {
    id: '1234',
    title: 'Hello there',
    poster: null,
    year: '2019',
};

describe('addToWatched action', () => {
    it('should return the expected action', () => {
        const expectedAction = {
            type: actionTypes.ADD_TO_WATCHED,
            data: {
                movie,
            },
        };
        expect(addToWatched(movie)).toEqual(expectedAction);
    });
});

describe('addToWatchlist action', () => {
    it('should return the expected action', () => {
        const expectedAction = {
            type: actionTypes.ADD_TO_WATCHLIST,
            data: {
                movie,
            },
        };
        expect(addToWatchlist(movie)).toEqual(expectedAction);
    });
});

describe('removeFromWatched action', () => {
    it('should return the expected action', () => {
        const expectedAction = {
            type: actionTypes.REMOVE_FROM_WATCHED,
            data: {
                movie,
            },
        };
        expect(removeFromWatched(movie)).toEqual(expectedAction);
    });
});

describe('removeFromWatchlist action', () => {
    it('should return the expected action', () => {
        const expectedAction = {
            type: actionTypes.REMOVE_FROM_WATCHLIST,
            data: {
                movie,
            },
        };
        expect(removeFromWatchlist(movie)).toEqual(expectedAction);
    });
});
