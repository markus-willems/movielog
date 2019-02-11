import React from 'react';

const SearchProviderDispatchContext = React.createContext<any>(null);
const SearchProviderStateContext = React.createContext<any>(null);

function SearchProvider({ children }: any) {
    const [searchResult, setSearchResult] = React.useState<Movie[]>([]);
    return (
        <SearchProviderDispatchContext.Provider value={setSearchResult}>
            <SearchProviderStateContext.Provider value={searchResult}>
                {children}
            </SearchProviderStateContext.Provider>
        </SearchProviderDispatchContext.Provider>
    );
}

export {
    SearchProvider,
    SearchProviderDispatchContext,
    SearchProviderStateContext,
};
