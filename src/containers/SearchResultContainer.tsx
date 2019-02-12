import React from 'react';

import {
    DataProviderDispatchContext,
    DataProviderStateContext,
} from '../providers/DataProvider';
import { SearchProviderStateContext } from '../providers/SearchProvider';

import Movies from '../components/Movies';

import {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
} from '../actions';

import { isOnWatched, isOnWatchlist } from '../reducers/movies';

function mapDispatchToProps(
    dispatch: (action: DispatchAction) => DispatchAction
) {
    return {
        addToWatched: (movie: Movie) => dispatch(addToWatched(movie)),
        addToWatchlist: (movie: Movie) => dispatch(addToWatchlist(movie)),
        removeFromWatched: (movie: Movie) => dispatch(removeFromWatched(movie)),
        removeFromWatchlist: (movie: Movie) =>
            dispatch(removeFromWatchlist(movie)),
    };
}

function mapStateToProps(state: any) {
    return {
        isOnWatched: (movieId: string) => isOnWatched(state.movies, movieId),
        isOnWatchlist: (movieId: string) =>
            isOnWatchlist(state.movies, movieId),
    };
}

function SearchResultContainer() {
    const dispatch = React.useContext(DataProviderDispatchContext);
    const state = React.useContext(DataProviderStateContext);
    const searchResult = React.useContext(SearchProviderStateContext);
    return (
        <Movies
            {...mapStateToProps(state)}
            {...mapDispatchToProps(dispatch)}
            movies={searchResult}
        />
    );
}

export default SearchResultContainer;
