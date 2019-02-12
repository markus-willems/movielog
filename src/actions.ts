import * as actionTypes from './actionTypes';
import { titleSearchMapper } from './api/mapper';
import { searchByTitle } from './api/search';

function addToWatched(movie: Movie) {
    return {
        type: actionTypes.ADD_TO_WATCHED,
        data: {
            movie,
        },
    };
}

function addToWatchlist(movie: Movie) {
    return {
        type: actionTypes.ADD_TO_WATCHLIST,
        data: {
            movie,
        },
    };
}

function removeFromWatched(movie: Movie) {
    return {
        type: actionTypes.REMOVE_FROM_WATCHED,
        data: {
            movie,
        },
    };
}

function removeFromWatchlist(movie: Movie) {
    return {
        type: actionTypes.REMOVE_FROM_WATCHLIST,
        data: {
            movie,
        },
    };
}

function searchTitle(
    title: string,
    setSearchResult: (searchResult: Movie[]) => void,
    callback: () => void = () => {}
) {
    return searchByTitle(title)
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
