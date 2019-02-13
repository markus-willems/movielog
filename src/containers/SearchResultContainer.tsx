import React from 'react';

import Movies from '../components/Movies';

import useMoviesProps from '../hooks/useMoviesProps';

function SearchResultContainer() {
    const props = useMoviesProps('search');
    return <Movies {...props} />;
}

export default SearchResultContainer;
