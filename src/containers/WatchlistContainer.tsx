import React from 'react';

import {
    DataProviderDispatchContext,
    DataProviderStateContext,
} from '../providers/DataProvider';

import Movies from '../components/Movies';

import {
    addToWatched,
    addToWatchlist,
    removeFromWatched,
    removeFromWatchlist,
} from '../actions';

import {
    isOnWatched,
    isOnWatchlist,
    selectWatchlistMovies,
} from '../reducers/movies';

function mapStateToProps(state: any) {
    return {
        movies: selectWatchlistMovies(state.movies),
        isOnWatched: (movieId: string) => isOnWatched(state.movies, movieId),
        isOnWatchlist: (movieId: string) =>
            isOnWatchlist(state.movies, movieId),
    };
}

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

function WatchlistContainer() {
    const state = React.useContext(DataProviderStateContext);
    const dispatch = React.useContext(DataProviderDispatchContext);
    return (
        <Movies {...mapDispatchToProps(dispatch)} {...mapStateToProps(state)} />
    );
}

export default WatchlistContainer;
