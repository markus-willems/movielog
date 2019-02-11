import React from 'react';

import { DataProviderDispatchContext } from '../providers/DataProvider';
import { SearchProviderStateContext } from '../providers/SearchProvider';

import Movies from '../components/Movies';

import { addToWatched, addToWatchlist } from '../actions';

function mapDispatchToProps(
    dispatch: (action: DispatchAction) => DispatchAction
) {
    return {
        addToWatched: (movie: Movie) => dispatch(addToWatched(movie)),
        addToWatchlist: (movie: Movie) => dispatch(addToWatchlist(movie)),
    };
}

function SearchResultContainer() {
    const dispatch = React.useContext(DataProviderDispatchContext);
    const searchResult = React.useContext(SearchProviderStateContext);
    return <Movies {...mapDispatchToProps(dispatch)} movies={searchResult} />;
}

export default SearchResultContainer;
