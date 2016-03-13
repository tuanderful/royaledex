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

import { VisibilityFilters } from '../actions';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../actions';

// initialState was used before we did the reducer composition
// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
// };

// "Reducer Composition" - factoring this out from our original reducer, which manages both todos
// and visbility filter.
// todoApp gives todo a slice of the state to manage.
// When factoring this out, state is only an array, returns results into todoApp
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed,
            });
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action),
            ];

        case TOGGLE_TODO:
            return state.map(t => todo(t, action));

        default:
            return state;
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos,
});

export default todoApp;

// function todoApp(state = initialState, action) {
//     return {
//         visbilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }

    // switch (action.type) {
    //     case SET_VISIBILITY_FILTER:
    //         // First param must be {} or state will mutate
    //         return Object.assign({}, state, {
    //             visibilityFilter: action.filter
    //         });
    //     case ADD_TODO:
    //         return Object.assign({}, state, {
    //             todos: [
    //                 ...state.todos,
    //                 {
    //                     text: action.text,
    //                     completed: false
    //                 }
    //             ]
    //         });
    //     case COMPLETE_TODO:
    //         return Object.assign({}, state, {
    //             // Update without mutation: create a new array
    //             todos: state.todos.map((todo, index) => {
    //                 if (index === action.index) {
    //                     return Object.assign({}, todo, {
    //                         completed: true
    //                     });
    //                 }
    //                 return todo
    //             })
    //         })
    //     default:
    //         return state;
    // }
// }
