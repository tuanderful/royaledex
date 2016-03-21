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

import ActionTypes from '../actions/Types.js';

// 1. Our data starts off as a JSON
const _CARDS_JSON = require('../../../data/cards.json');

// HACK - mark knight as selected
_CARDS_JSON.knight.selected = true;


// 2. Our state is an array
const initialState = Object.keys(_CARDS_JSON).map((key) => _CARDS_JSON[key]);

// here is the state of a single card
const card = (state, action) => {
    if (state.id !== action.id) {
        return state;
    }

    switch (action.type) {
        case ActionTypes.ADD_CARD_TO_COMPARE:
            return Object.assign({}, state, {
                selected: true,
            });
        case ActionTypes.REMOVE_CARD_TO_COMPARE:
            return Object.assign({}, state, {
                selected: false,
            });
        case ActionTypes.TOGGLE_CARD_SELECTION:
            return Object.assign({}, state, {
                selected: !state.selected,
            });
        default:
            return state;
    }
};

// here the state is an array of all cards
const cards = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CARD_TO_COMPARE:
        case ActionTypes.REMOVE_CARD_TO_COMPARE:
        case ActionTypes.TOGGLE_CARD_SELECTION:
            return state.map(c => card(c, action));
        default:
            return state;
    }
};

export default cards;
