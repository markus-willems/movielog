import React from 'react';
import { useRootReducer } from '../helpers';

const DataProviderDispatchContext = React.createContext<any>(null);
const DataProviderStateContext = React.createContext<any>(null);

function DataProvider({ children, rootReducer }: IWrapperProps) {
	const [state, dispatch] = useRootReducer(rootReducer);
	return (
		<DataProviderDispatchContext.Provider value={dispatch}>
			<DataProviderStateContext.Provider value={state}>
				{children}
			</DataProviderStateContext.Provider>
		</DataProviderDispatchContext.Provider>
	);
}

export { DataProvider, DataProviderDispatchContext, DataProviderStateContext };
