import React from 'react';
import { Route } from 'react-router-dom';

import Index from '../routes/Index';
import Watched from '../routes/Watched';
import Watchlist from '../routes/Watchlist';

function Main() {
    return (
        <main>
            <Route exact={true} path="/" component={Index} />
            <Route path="/watchlist/:page?" component={Watchlist} />
            <Route path="/watched/:page?" component={Watched} />
        </main>
    );
}

export default Main;
