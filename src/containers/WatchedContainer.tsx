import React from 'react';
import { RouteComponentProps } from 'react-router';

import Movies from '../components/Movies';

import useMoviesProps from '../hooks/useMoviesProps';

function WatchedContainer(ownProps: RouteComponentProps) {
    const props = useMoviesProps('watched');
    return <Movies {...props} />;
}

export default WatchedContainer;
