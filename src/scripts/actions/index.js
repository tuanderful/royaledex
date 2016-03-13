// Actions are payloads of information that send data from your application to
// your store. They are the only source of information for the store.
//
// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }
//
// Actions describe the fact that something happened, but don’t specify how the
// application’s state changes in response. This is the job of a reducer.
//
// You send them to the store using store.dispatch().


// Action types
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// Here we define action creators, functions that create actions.
let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text,
});

// export function completeTodo(index) {
//     return {
//         type: COMPLETE_TODO,
//         index
//     }
// }

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});
