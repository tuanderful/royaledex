import React, { PropTypes } from 'react';

require('./Container.css');

function getStyles() {
    return {
        width: '330px',
        float: 'left',
    };
}

const Container = ({ children, styles }) => (
    <div className="Container" style={getStyles()}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object.isRequired,
};

export default Container;
