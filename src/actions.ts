import * as actionTypes from './actionTypes';
import { searchTitle } from './api/search';

function addToWatched(id: string) {
    return {
        type: actionTypes.ADD_TO_WATCHED,
        data: {
            id,
        },
    };
}

function addToWatchlist(id: string) {
    return {
        type: actionTypes.ADD_TO_WATCHLIST,
        data: {
            id,
        },
    };
}

function fetchTitle(
    title: string,
    dispatch: (obj: DispatchAction) => void,
    callback: () => void = () => {}
) {
    dispatch({
        type: actionTypes.FETCH_SEARCH_TITLE_REQUEST,
    });
    return searchTitle(title)
        .then((res: IOMDbSearchResponse) => {
            dispatch({
                type: actionTypes.FETCH_SEARCH_TITLE_SUCCESS,
                data: res.Search ? res.Search : [],
            });
        })
        .catch((err: Error) =>
            dispatch({
                type: actionTypes.FETCH_SEARCH_TITLE_ERROR,
                data: err,
            })
        )
        .finally(callback);
}

export { addToWatched, addToWatchlist, fetchTitle };
