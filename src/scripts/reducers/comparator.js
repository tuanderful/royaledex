import ActionTypes from '../actions/Types.js';

const initialState = ['knight'];

const comparator = (state = initialState, action) => {
    const newState = [].concat(state);
    const index = newState.indexOf(action.id);

    switch (action.type) {
        case ActionTypes.SELECT_CARD:

            // if we're already comparing two, override the last slot.
            if (state.length === 2) {
                newState[1] = action.id;
            } else {
                newState.push(action.id);
            }

            return newState;

        case ActionTypes.REMOVE_COMPARE_CARD:
            // NOTE: does it ever make sense to have [undefined, 'knight']
            // if you want a card in the second slot?
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }
};

export default comparator;
