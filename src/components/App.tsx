import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import { DataProvider } from '../providers/DataProvider';
import rootReducer from '../reducers/rootReducer';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <DataProvider rootReducer={rootReducer}>
                    <Header />
                    <Main />
                    <Footer />
                </DataProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
