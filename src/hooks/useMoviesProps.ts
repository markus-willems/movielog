import React from 'react';

import {
    DataProviderDispatchContext,
    DataProviderStateContext,
} from '../providers/DataProvider';
import { SearchProviderStateContext } from '../providers/SearchProvider';

import {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
} from '../actions';

import {
    isOnWatched,
    isOnWatchlist,
    selectWatchedMovies,
    selectWatchlistMovies,
} from '../reducers/movies';

function useMoviesProps(type: string) {
    const providerState = React.useContext(DataProviderStateContext);
    const providerDispatch = React.useContext(DataProviderDispatchContext);
    const searchResult = React.useContext(SearchProviderStateContext);

    function mapStateToProps(state: IApplicationState) {
        return {
            movies:
                type === 'watched'
                    ? selectWatchedMovies(state.movies)
                    : type === 'watchlist'
                    ? selectWatchlistMovies(state.movies)
                    : searchResult,
            isOnWatched: (movieId: string) =>
                isOnWatched(state.movies, movieId),
            isOnWatchlist: (movieId: string) =>
                isOnWatchlist(state.movies, movieId),
        };
    }

    function mapDispatchToProps(dispatch: (action: IAction) => IAction) {
        return {
            addToWatched: (movie: IMovie) => dispatch(addToWatched(movie)),
            addToWatchlist: (movie: IMovie) => dispatch(addToWatchlist(movie)),
            removeFromWatched: (movie: IMovie) =>
                dispatch(removeFromWatched(movie)),
            removeFromWatchlist: (movie: IMovie) =>
                dispatch(removeFromWatchlist(movie)),
        };
    }

    return {
        ...mapStateToProps(providerState),
        ...mapDispatchToProps(providerDispatch),
    };
}

export default useMoviesProps;
