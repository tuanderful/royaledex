import React from 'react';
import Header from './Header';


import CardGridContainer from '../containers/CardGrid.container';
import CardCompareContainer from '../containers/CardCompare.container';


const App = () => (
    <div>
        <Header />
        <CardGridContainer />
        <CardCompareContainer />
    </div>
);

export default App;
