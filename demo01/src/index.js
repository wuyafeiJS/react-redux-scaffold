import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import{ createStore } from'redux';
import reducer from './reducers';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
