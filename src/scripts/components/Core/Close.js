import React, { PropTypes } from 'react';

const Close = ({ onClick, size, styles }) => {
    const closeURL = require('../../../images/icons/close.png');

    const style = Object.assign({}, styles, {
        background: `url(${closeURL})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    });

    if (size === 'large') {
        Object.assign(style, {
            width: '76px',
            height: '77px',

        });
    } else {
        Object.assign(style, {
            width: '38px',
            height: '38px',

        });
    }

    return (
        <button className="Close accessible" style={style} onClick={onClick}>
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
