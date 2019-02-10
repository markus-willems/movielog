import React from 'react';

import {
    DataProviderDispatchContext,
    DataProviderStateContext,
} from '../providers/DataProvider';

import Movies from '../components/Movies';

import { addToWatched, addToWatchlist } from '../actions';

import { selectWatchedMovies } from '../reducers/movies';

function WatchedContainer() {
    const state = React.useContext(DataProviderStateContext);
    const dispatch = React.useContext(DataProviderDispatchContext);
    return (
        <Movies {...mapDispatchToProps(dispatch)} {...mapStateToProps(state)} />
    );
}

function mapStateToProps(state: any) {
    return {
        movies: selectWatchedMovies(state.movies),
    };
}

function mapDispatchToProps(
    dispatch: (action: DispatchAction) => DispatchAction
) {
    return {
        addToWatched: (id: string) => dispatch(addToWatched(id)),
        addToWatchlist: (id: string) => dispatch(addToWatchlist(id)),
    };
}

export default WatchedContainer;
