import React from 'react';
import CONST from '../CONST.js';


const style = {
    color: 'white',
    fontFamily: 'supercell-magicregular',
    fontSize: '18px',
    textShadow: '0px 1px 0px red',
    background: '#488bf4',
    marginTop: '0',
    height: `${CONST.HEADER_HEIGHT}px`,
    padding: '10px',
};

const Header = () => (
    <h1 style={style}>
        royaledex
    </h1>
);

export default Header;
