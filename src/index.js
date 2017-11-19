import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './registerServiceWorker';

import App from './components/App';

import './base.css';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
