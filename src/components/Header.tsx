import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/watchlist/123">Watchlist</Link>
                    </li>
                    <li>
                        <Link to="/watched/444">Watched</Link>
                    </li>
                </ul>
            </nav>
            <Search />
        </header>
    );
}

export default Header;
