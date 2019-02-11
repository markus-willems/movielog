import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import { DataProvider } from '../providers/DataProvider';
import { SearchProvider } from '../providers/SearchProvider';
import rootReducer from '../reducers/rootReducer';

function App() {
    return (
        <div className="container">
            <DataProvider rootReducer={rootReducer}>
                <BrowserRouter>
                    <SearchProvider>
                        <Header />
                        <Main />
                        <Footer />
                    </SearchProvider>
                </BrowserRouter>
            </DataProvider>
        </div>
    );
}

export default App;
