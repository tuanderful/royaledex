import React from 'react';
import Footer from './Footer';
// These components are wrapped in containers that will use `store.subscribe` to read part of the
// Redux state tree and supply props to a presentational component it renders
import AddTodo from '../containers/AddTodo';
    // AddTodo calls Todo
import VisibleTodoList from '../containers/VisibleTodoList';
    // VisibleTodoList calls TodoList

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
