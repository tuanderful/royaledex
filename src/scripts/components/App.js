import React from 'react';
import Header from './Header';


import CardGrid from '../containers/CardGrid.container';


// Footer, although it can mutate data, is not dependent on state. It contains FilterLinks, which
// are dependent on state, so they're containers.
import Footer from './Footer';
// These components are wrapped in containers that will use `store.subscribe` to read part of the
// Redux state tree and supply props to a presentational component it renders
import AddTodo from '../containers/AddTodo';
    // AddTodo calls Todo
import VisibleTodoList from '../containers/VisibleTodoList';
    // VisibleTodoList calls TodoList

const App = () => (
    <div>
        <Header />
        <CardGrid />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
