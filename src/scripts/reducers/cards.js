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

import { SELECT_CARD } from '../actions';


const _CARDS_JSON = require('../../../data/cards.json');
const CARDS = Object.keys(_CARDS_JSON).map((key) => _CARDS_JSON[key]);
console.log(CARDS);

// here is the state of a single card
const card = (state, action) => {
    switch (action.type) {
        case SELECT_CARD:
            if (state.name !== action.name) {
                return state;
            }
            return Object.assign({}, state, {
                selected: !state.selected,
            });
        default:
            return state;
    }
};

// here the state is an array of all cards
const cards = (state = CARDS, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return state.map(c => card(c, action));
        default:
            return state;
    }
};

export default cards;
