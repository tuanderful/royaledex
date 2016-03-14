import React from 'react';
import Header from './Header';


import CardGridContainer from '../containers/CardGrid.container';
import CardCompareContainer from '../containers/CardCompare.container';


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
        <CardGridContainer />
        <CardCompareContainer />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;
