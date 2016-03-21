// Actions are payloads of information that send data from your application to
// your store. They are the only source of information for the store.
//
// {
//   type: 'ADD_TODO',
//   text: 'Build my first Redux app'
// }
//
// Actions describe the fact that something happened, but don’t specify how the
// application’s state changes in response. This is the job of a reducer.
//
// You send them to the store using store.dispatch().


// Action types
import ActionTypes from './Types.js';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// Here we define action creators, functions that create actions.
let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text,
});

export const setVisibilityFilter = (filter) => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter,
});

export const toggleTodo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    id,
});


//------------------------------------------------------------------


export const addCardToCompare = (id) => ({
    type: ActionTypes.ADD_CARD_TO_COMPARE,
    id,
});

export const removeCardToCompare = (id) => ({
    type: ActionTypes.REMOVE_CARD_TO_COMPARE,
    id,
});

export const toggleCardSelection = (id) => ({
    type: ActionTypes.TOGGLE_CARD_SELECTION,
    id,
});
