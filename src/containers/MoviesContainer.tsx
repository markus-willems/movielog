import React, { useContext } from 'react';
import { DataProviderStateContext } from '../providers/DataProvider';

import Movies from '../components/Movies';

function MoviesContainer() {
	const { movies } = useContext(DataProviderStateContext);
	return <Movies movies={movies} />;
}

export default MoviesContainer;
