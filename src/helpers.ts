import React from 'react';

function useRootReducer(rootReducer: IReducer) {
    const initialState = React.useMemo(
        () =>
            rootReducer(
                {},
                {
                    type: '@@INIT_STATE@@',
                }
            ),
        [rootReducer]
    );
    const [state, dispatch] = React.useReducer(rootReducer, initialState);
    return [state, dispatch];
}

function combineReducers(
    reducers: {
        [partialState: string]: IReducer;
    } = {}
) {
    const partialStates = Object.keys(reducers);
    return function rootReducer(state: any = {}, action: any) {
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
