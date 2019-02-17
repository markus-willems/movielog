import React from 'react';

const SearchProviderDispatchContext = React.createContext<any>(null);
const SearchProviderStateContext = React.createContext<{
    movies: IMovie[];
    totalResult: string;
}>({ movies: [], totalResult: '0' });

function SearchProvider({ children }: any) {
    const [searchResult, setSearchResult] = React.useState<{
        movies: IMovie[];
        totalResult: string;
    }>({ movies: [], totalResult: '0' });
    console.log('searchResult', searchResult);
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
