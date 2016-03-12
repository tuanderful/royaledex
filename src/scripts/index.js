import WptDashboardApp from './components/WptDashboardApp';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
// import { Router, Route, browserHistory } from 'react-router';

const store = createStore(todoApp);

// test actions
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe =
store.subscribe(() =>
  console.log(store.getState())
);

import { setCountry, setStat, setMetric } from './actions';
store.dispatch(setCountry('DE'));
store.dispatch(setMetric('firstPaint'));
store.dispatch(setStat('average'));


// unsubscribe();


render((
  // <Router history={browserHistory}>
  //   <Route path="/" component={WptDashboardApp} />
  // </Router>
  <Provider store={store}>
    <WptDashboardApp />
  </Provider>
), document.getElementById('content'));
