import { combineReducers } from '../src/helpers';

describe('combineReducers', () => {
	it('should return a function', () => {
		expect(typeof combineReducers()).toEqual('function');
	});
	it('should return a function with two parameters', () => {
		expect(combineReducers().length).toBe(2);
	});
});

describe('rootReducer', () => {
	it('should return initial state of supplied reducers when applied with undefined state and non-exisitent action', () => {
		const randomAction = { type: '@@DOESNT_EXIST@@' };
		const reducer = (initialState: any) => (state: any = initialState) =>
			state;
		const rootReducer = combineReducers({
			prop1: reducer(1),
			prop2: reducer(true),
		});
		expect(JSON.stringify(rootReducer(undefined, randomAction))).toEqual(
			JSON.stringify({ prop1: 1, prop2: true })
		);
	});
});
