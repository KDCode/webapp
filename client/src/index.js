import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore ,appMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers,compose(appMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));