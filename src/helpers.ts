import { useReducer } from 'react';

function useRootReducer(rootReducer: ReducerType) {
	const [state, dispatch] = useReducer(rootReducer, undefined, {
		type: '@@INIT_STATE@@',
	});
	return [state, dispatch];
}

function combineReducers(
	reducers: {
		[partialState: string]: ReducerType;
	} = {}
) {
	const partialStates = Object.keys(reducers);
	return function rootReducer(state: any = {}, action: Action) {
		const nextState: any = {};
		for (const key of partialStates) {
			const reducer = reducers[key];
			nextState[key] = reducer(
				state[key] ? state[key] : undefined,
				action
			);
		}
		return nextState;
	};
}

export { combineReducers, useRootReducer };
