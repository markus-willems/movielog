import * as actionTypes from '../actionTypes';

function moviesReducer(state = [], action: { type: string; data?: any }) {
	switch (action.type) {
		case actionTypes.FETCH_SEARCH_TITLE_SUCCESS:
			return action.data;
		case actionTypes.FETCH_SEARCH_TITLE_ERROR:
			return [];
	}
	return state;
}

export default moviesReducer;
