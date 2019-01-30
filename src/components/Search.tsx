import React, { FormEvent, useContext, useState } from 'react';
import { fetchTitle } from '../actions';
import { DataProviderDispatchContext } from '../providers/DataProvider';

function Search() {
    const dispatch = useContext(DataProviderDispatchContext);
    const [inputValue, setInputValue] = useState('');

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();

        fetchTitle(inputValue, dispatch, () => setInputValue(''));
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
