import React from 'react';

import Movies from '../components/Movies';

import useMoviesProps from '../hooks/useMoviesProps';

function WatchedContainer() {
    const props = useMoviesProps('watched');
    return <Movies {...props} />;
}

export default WatchedContainer;
