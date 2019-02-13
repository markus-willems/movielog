import React from 'react';

import Movies from '../components/Movies';

import useMoviesProps from '../hooks/useMoviesProps';

function WatchlistContainer() {
    const props = useMoviesProps('watchlist');
    return <Movies {...props} />;
}

export default WatchlistContainer;
