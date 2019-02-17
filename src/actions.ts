import * as actionTypes from './actionTypes';
import { titleSearchMapper } from './api/mapper';
import { searchByTitle } from './api/search';

function addToWatched(movie: IMovie) {
    return {
        type: actionTypes.ADD_TO_WATCHED,
        data: {
            movie,
        },
    };
}

function addToWatchlist(movie: IMovie) {
    return {
        type: actionTypes.ADD_TO_WATCHLIST,
        data: {
            movie,
        },
    };
}

function removeFromWatched(movie: IMovie) {
    return {
        type: actionTypes.REMOVE_FROM_WATCHED,
        data: {
            movie,
        },
    };
}

function removeFromWatchlist(movie: IMovie) {
    return {
        type: actionTypes.REMOVE_FROM_WATCHLIST,
        data: {
            movie,
        },
    };
}

function searchTitle(
    title: string,
    page: number = 1,
    setSearchResult: (searchResult: {
        movies: IMovie[];
        totalResults: string;
    }) => void,
    callback: () => void = () => {}
) {
    return searchByTitle(title, page)
        .then((res: IOMDbSearchResponse) => {
            setSearchResult(titleSearchMapper(res));
        })
        .catch((err: Error) => console.error(err))
        .finally(callback);
}

export {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
    searchTitle,
};
