import React, { PropTypes } from 'react';

require('./Close.scss');

// TODO: make Close extend from an Icon class
const Close = ({ onClick, size, styles }) => {
    const closeURL = require('../../../images/icons/close.png');

    const style = Object.assign({}, styles, {
        backgroundImage: `url(${closeURL})`,
        backgroundColor: '#636a7c',
    });

    return (
        <button className={`Close accessible ${size}`} style={style} onClick={onClick}>
            <span></span>close
        </button>
    );
};


Close.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.string,
    styles: PropTypes.object,
};

export default Close;
