import React from 'react';
import { RouteComponentProps } from 'react-router';

import Movies from '../containers/WatchedContainer';

function Watched(props: RouteComponentProps) {
    return (
        <div>
            <Movies {...props} />
        </div>
    );
}

export default Watched;
