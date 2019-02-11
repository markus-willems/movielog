import React, { FormEvent, useContext, useState } from 'react';
import { searchTitle } from '../actions';
import { SearchProviderDispatchContext } from '../providers/SearchProvider';

function Search() {
    const setSearchResult = useContext(SearchProviderDispatchContext);
    const [inputValue, setInputValue] = useState('');

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();

        searchTitle(inputValue, setSearchResult, () => setInputValue(''));
    }

    return (
        <div className="search">
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="search">Search:</label>
                <input
                    name="search"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;
