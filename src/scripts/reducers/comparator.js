import ActionTypes from '../actions/Types.js';

const _CARDS_JSON = require('../../../data/cards.json');
// const CARDS = Object.keys(_CARDS_JSON).map((key) => _CARDS_JSON[key]);

// // here is the state of a single card
// const card = (state, action) => {
//     switch (action.type) {
//         case ActionTypes.SELECT_CARD:
//             if (state.name !== action.name) {
//                 return state;
//             }
//             return Object.assign({}, state, {
//                 selected: !state.selected,
//             });
//         default:
//             return state;
//     }
// };

const initialState = [
    _CARDS_JSON.knight,
];

// TODO(tuanhuynh): comparator contains cards. update so it only contains the id, then leave it
// to the containers to fetch the correct card.
const comparator = (state = initialState, action) => {
    const newState = [].concat(state);

    switch (action.type) {
        case ActionTypes.SELECT_CARD:
            return [_CARDS_JSON[action.id]];

        case ActionTypes.REMOVE_COMPARE_CARD:
            console.log('removing comparison', action);
            newState[0] = _CARDS_JSON[action.id];

            return newState;
        default:
            return state;
    }
};

export default comparator;
