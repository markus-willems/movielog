import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import 'normalize.css';
import './assets/css/main.scss';

render(<App />, document.getElementById('app'));

// @ts-ignore
module.hot.accept();
