import React from 'react';

import Movies from '../containers/MoviesContainer';
import Footer from './Footer';
import Header from './Header';

import { DataProvider } from '../providers/DataProvider';
import rootReducer from '../reducers/rootReducer';

function App() {
    return (
        <div className="container">
            <DataProvider rootReducer={rootReducer}>
                <Header />
                <main>
                    <Movies />
                </main>
                <Footer />
            </DataProvider>
        </div>
    );
}

export default App;
