import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appReducers from './reducers';
import App from './components/App';

const store = createStore(appReducers);

require('../styles/main.css');
require('../styles/normalize.css');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
