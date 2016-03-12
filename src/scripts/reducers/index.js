// It’s very important that the reducer stays pure.
// Things you should never do inside a reducer:
//   * Mutate its arguments;
//   * Perform side effects like API calls and routing transitions;
//   * Calling non-pure functions, e.g. Date.now() or Math.random().


// import { combineReducers } from 'redux'
import { SET_COUNTRY, SET_METRIC, SET_STAT } from '../actions'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
// import * as reducers from './';

// const todoApp = combineReducers(reducers)

const initialState = {
  country: 'US',
  metric: 'SpeedIndex',
  stat: 'p90'
}

const todoApp = function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRY:
      return Object.assign({}, state, {
        country: action.country
      });
    case SET_METRIC:
      return Object.assign({}, state, {
        metric: action.metric
      });
    case SET_STAT:
      return Object.assign({}, state, {
        stat: action.stat
      });
    default:
      return state;
  }
}

export default todoApp
