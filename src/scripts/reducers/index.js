// The reducer is a pure function that takes the previous state and an
// action, and returns the next state.
//
//   (previousState, action) => newState
//
// It’s very important that the reducer stays pure.
// Things you should never do inside a reducer:
//   * Mutate its arguments;
//   * Perform side effects like API calls and routing transitions;
//   * Calling non-pure functions, e.g. Date.now() or Math.random().

import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import cards from './cards';

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    cards,
});

export default todoApp;
