import ActionTypes from '../actions/Types.js';

const initialState = ['knight'];

// NOTE: this comparator feels weird. we're basically managing state (which cards are selected) in
// multiple places. the cards reducer should be the source of truth, and the comparator state
// simply derives data from the cards reducer.
//
// TODO: Look at CardCompare.container.js

const comparator = (state = initialState, action) => {
    const newState = [].concat(state);
    const index = newState.indexOf(action.id);

    function _addCard() {
        // if we're already comparing two, override the last slot.
        if (newState.length === 2) {
            newState[1] = action.id;
        } else {
            newState.push(action.id);
        }

        return newState;
    }

    function _removeCard() {
        // NOTE: does it ever make sense to have [undefined, 'knight']
        // if you want a card in the second slot?
        newState.splice(index, 1);
        return newState;
    }

    switch (action.type) {
        case ActionTypes.SELECT_CARD:
            return _addCard();

        case ActionTypes.REMOVE_COMPARE_CARD:
            return _removeCard();

        case ActionTypes.TOGGLE_CARD_SELECTION:
            if (index > -1) {
                return _removeCard();
            }
            // else, if card is not found
            return _addCard();

        default:
            return state;
    }
};

export default comparator;
